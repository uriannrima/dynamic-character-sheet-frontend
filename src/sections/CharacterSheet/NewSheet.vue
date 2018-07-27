<template>
  <loading-component :is-loading="isLoading">
    <div class="sheet">
      <header class="sheet__header">
        <div class="sheet__header__details">
          <div class="details">
            <div class="details__avatar">
              <div class="avatar">
                <i class="avatar__icon ra"
                   :class="iconName"
                   :style="{color : iconColor}"></i>
              </div>
            </div>
            <div class="details__body">
              <span class="details__body__header">
                {{description.name}}
                <small class="details__body__race">({{description.race}})</small>
              </span>
              <div class="details__body__classes">
                <span>{{classes.map(classe => classe.name).join(' / ')}}</span>
              </div>
              <span class="details__body__level">
                <span>{{classes.map(classe => `Level ${classe.level}`).join(' / ')}}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="status">
          <div class="hitpoints">
            <span class="hitpoints__header">
              Hit Points
            </span>
            <span class="hitpoints__value">
              {{`${status.healthPoints} / ${status.healthPoints}`}}
            </span>
          </div>
        </div>
      </header>
      <div class="sheet__section"
           v-show="selectedSection === 'ability & saves'">
        <div class="resume-cards">
          <span class="resume-cards__header">Ability Scores</span>
          <div class="resume-cards__body">
            <div v-for="abilityScore in abilityScores"
                 :key="abilityScore.name"
                 class="resume-card--thinner">
              <span class="resume-card__header">{{abilityScore.name.substring(0,3)}}</span>
              <div class="resume-card__body">
                <span>
                  {{abilityScore.tempModifier}}
                </span>
                <small>({{abilityScore.tempValue}})</small>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-cards">
          <span class="resume-cards__header">Saving Throws</span>
          <div class="resume-cards__body">
            <div v-for="savingThrow in savingThrows"
                 :key="savingThrow.name"
                 class="resume-card--thinner">
              <span class="resume-card__header">{{savingThrow.name}}</span>
              <div class="resume-card__body">
                <span>
                  {{getSavingThrowTotal(savingThrow)}}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-cards">
          <span class="resume-cards__header">Miscelaneous</span>
          <div class="resume-cards__body">
            <div class="resume-card">
              <span class="resume-card__header">Initiative</span>
              <div class="resume-card__body">
                <span>{{totalInitiative}}</span>
              </div>
            </div>
            <div class="resume-card">
              <span class="resume-card__header">Speed</span>
              <div class="resume-card__body">
                <span>{{speed}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sheet__section"
           v-show="selectedSection === 'skills'">
        <div class="resume-cards">
          <span class="resume-cards__header">Skills</span>
          <div class="resume-cards__body--column">
            <span v-if="skills.length <= 0"
                  class="skills--no-skill">No skills</span>
            <div v-else
                 v-for="skill in skills"
                 :key="skill._id"
                 class="skill">
              <div class="skill__icon">
                <i class="material-icons">
                  search
                </i>
              </div>
              <div class="skill__details">
                <span>{{skill.name}}</span>
                <small>SubValue</small>
              </div>
              <div class="skill__value">
                <span>{{getSkillTotal(skill)}}</span>
              </div>
            </div>
          </div>
        </div>
        <button @click="resetCharacterSkill">Reset Skills</button>
      </div>
    </div>
    <div :class="{ 'section-menu--opened' : isSectionMenuOpen, 'section-menu' : !isSectionMenuOpen }">
      <div class="section-menu__mask"
           v-show="isSectionMenuOpen"
           @click="toggleSectionMenu"></div>
      <div class="section-menu__content">
        <div class="section-menu__menu"
             v-show="isSectionMenuOpen">
          <div v-for="section in sections"
               :key="section"
               class="section-menu-item"
               @click="toggleSection(section); toggleSectionMenu();">
            <span>{{section}}</span>
          </div>
        </div>
        <div class="section-menu__footer">
          <i class="material-icons sections-icons"
             @click="toggleSectionMenu">
            {{isSectionMenuOpen ? 'close' : 'apps' }}
          </i>
        </div>
      </div>
    </div>
  </loading-component>
</template>

<script>
import CharacterModule, { mapState, mapActions } from './Store';
import VuexComponent from 'shared/mixins/vuex.component';
import { LoadingComponent } from 'shared/components';

const delay = async duration =>
  new Promise((resolve, reject) => setTimeout(resolve, duration));

const beforeRoute = function(to, from, next) {
  next(async vm => {
    vm.isLoading = true;
    vm.loadSheet(vm.id);
    vm.isLoading = false;
  });
};

export default {
  components: { LoadingComponent },
  mixins: [VuexComponent('Character', CharacterModule)],
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      vm.isLoading = true;
      await vm.loadSheet(vm.id);
      vm.isLoading = false;
    });
  },
  async beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    await this.loadSheet(to.params.id);
    this.isLoading = false;
    next();
  },
  props: {
    id: {
      type: String
    }
  },
  data: () => ({
    isLoading: false,

    iconName: 'ra-ball',
    iconColor: 'purple',

    isSectionMenuOpen: false,
    selectedSection: 'ability & saves',
    sections: [
      'skills',
      'combat',
      'gear',
      'spells',
      'ability & saves',
      'feats & traits'
    ]
  }),
  computed: {
    ...mapState([
      'description',
      'classes',
      'abilityScores',
      'savingThrows',
      'initiativeModifier',
      'keyAbilityScores',
      'speed',
      'status',
      'skills'
    ]),
    totalInitiative() {
      return (
        this.abilityScores[this.keyAbilityScores.initiative].tempModifier +
        this.initiativeModifier
      );
    }
  },
  methods: {
    ...mapActions(['loadCharacter', 'newCharacter', 'resetSkills']),
    async loadSheet(characterId) {
      return delay(3000).then(() => {
        if (!characterId) {
          return this.newCharacter();
        } else {
          return this.loadCharacter(characterId);
        }
      });
    },
    getModifierSign(abilityScore) {
      return abilityScore.tempModifier >= 0 ? '+' : '-';
    },
    getSavingThrowTotal(savingThrow) {
      return (
        this.abilityScores[savingThrow.keyAbility].tempModifier +
        savingThrow.total
      );
    },
    getSkillTotal(skill) {
      return (
        this.abilityScores[skill.keyAbility].tempModifier +
        skill.rank +
        skill.miscModifier +
        skill.hiddenModifier
      );
    },
    toggleSectionMenu() {
      this.isSectionMenuOpen = !this.isSectionMenuOpen;
    },
    toggleSection(sectionName) {
      this.selectedSection = sectionName;
    },
    resetCharacterSkill() {
      this.resetSkills();
    }
  }
};
</script>

<style lang="scss">
@import '../../../public/styles/variables.scss';

.sheet {
  display: flex;
  flex-direction: column;
  padding-top: 72px;

  &__header {
    background-color: #252121;
    position: fixed;
    height: 72px;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px red;

    &__details {
      display: flex;
      width: 70%;
    }
  }

  &__section {
    padding: 2px 5px 70px;
  }

  &__subsection {
  }
}

.details {
  display: flex;
  align-items: center;
  padding: 0 5px;

  &__body {
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    &__header {
      @extend .text-lg;
      color: white;
    }
    &__race {
      @extend .text-xs;
      color: darkgray;
    }
    &__classes {
      @extend .text-xs;
      color: darkgray;
      display: flex;
    }
    &__level {
      @extend .text-xs;
      color: lightgray;
    }
  }
}

.status {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  padding: 0 5px;
}

.hitpoints {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  border: solid 1px red;
  border-radius: 2px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #ffffff2b;

  &__header {
    @extend .text-2xs;
    text-transform: uppercase;
  }

  &__value {
    @extend .text-xl;
  }
}

.avatar {
  width: 3em;
  height: 3em;
  border-radius: 10%;
  border: solid 1px black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &__icon {
    font-size: 2.6em;
    color: darkgoldenrod;
  }
}

.resume-cards {
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-bottom: 5px;

  &__header {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 10px 10px 0 0;
  }

  &__body {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    &--column {
      @extend .resume-cards__body;
      flex-direction: column;
    }
  }

  .resume-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    text-align: center;
    border: solid 1px black;
    margin: 10px;
    border-radius: 5px;

    &--thinner {
      @extend .resume-card;
      flex: unset;
      width: 25%;
    }

    &__header {
      @extend .text-xs;
      font-weight: bold;
      color: white;

      border: solid 1px black;
      border-radius: 5px;
      margin-top: -8px;
      background-color: black;
      padding: 0 5px;

      text-transform: uppercase;
    }

    &__body {
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        @extend .text-5xl;
        font-weight: bold;
        position: relative;
      }

      i {
        position: absolute;
        right: 110%;
        font-style: normal;
        color: gray;
      }

      small {
        border: solid 1px black;
        border-radius: 5px;
        margin-bottom: -8px;
        background-color: white;
        padding: 0 5px;
      }
    }
  }
}

.section-menu {
  position: fixed;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  border: solid 1px black;

  &--opened {
    @extend .section-menu;
    top: 0;
    left: 0;
  }

  &__mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
  }

  &__content {
    flex: 1;
    z-index: 1;
  }

  &__menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .section-menu-item {
      border: solid 1px black;
      border-radius: 5px;
      display: flex;
      width: 45%;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      background-color: black;
      color: white;

      span {
        text-transform: uppercase;
      }
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.sections-icons {
  font-size: 45px;
}

.skills--no-skill {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.skill {
  display: flex;
  align-items: center;
  border: solid 1px black;

  &__icon {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;

    span {
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  &__value {
    @extend .skill__icon;
  }
}
</style>
