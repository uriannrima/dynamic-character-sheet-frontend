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
                  {{abilityScore.tempModifier | signed }}
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
                  {{getSavingThrowTotal(savingThrow) | signed}}
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
                <span>{{getTotalInitiative | signed}}</span>
              </div>
            </div>
            <div class="resume-card">
              <span class="resume-card__header">Speed</span>
              <div class="resume-card__body">
                <span>{{ speed }}</span>
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
                  class="list--no-items">No skills</span>
            <div v-else
                 class="skills">
              <div class="skills__header">
                <div class="skills__header__icon">
                </div>
                <div class="skills__header__is-class">
                  <span>CS</span>
                </div>
                <div class="skills__header__name">
                  <span>Skill</span>
                </div>
                <div class="skills__header__key-ability">
                  <span>Ability</span>
                </div>
                <div class="skills__header__modifier">
                  <span>Mod</span>
                </div>
              </div>
              <div class="skills__list">
                <div v-for="skill in orderedSkills"
                     :key="skill._id"
                     class="skill">
                  <div class="skill__icon">
                    <i class="material-icons">
                      search
                    </i>
                  </div>
                  <div class="skill__is-class">
                    <label></label>
                  </div>
                  <div class="skill__details">
                    <span>{{skill.name}}</span>
                    <small v-show="skill.hasSubValues">Arcana</small>
                  </div>
                  <div class="skill__key-ability">
                    <span>{{ skill.keyAbility.substring(0,3) }}</span>
                  </div>
                  <div class="skill__modifier">
                    <span>{{getSkillTotal(skill) | signed}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button @click="resetCharacterSkill">Reset Skills</button>
      </div>
      <div class="sheet__section"
           v-show="selectedSection === 'combat'">
        <div class="resume-cards">
          <span class="resume-cards__header">Offensive</span>
          <div class="resume-cards__body">
            <div class="resume-card">
              <span class="resume-card__header">Base Attack Bonus</span>
              <div class="resume-card__body">
                <span>{{ getBaseAttackBonus }}</span>
              </div>
            </div>
            <div class="resume-card">
              <span class="resume-card__header">Grapple</span>
              <div class="resume-card__body">
                <span>{{ getGrappleTotal }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-cards">
          <span class="resume-cards__header">Defensive</span>
          <div class="resume-cards__body">
            <div class="resume-card">
              <span class="resume-card__header">Armor Class</span>
              <div class="resume-card__body">
                <span>{{ getTotalArmor }}</span>
              </div>
            </div>
            <div class="resume-card">
              <span class="resume-card__header">Touch</span>
              <div class="resume-card__body">
                <span>{{ getTouchArmor }}</span>
              </div>
            </div>
            <div class="resume-card">
              <span class="resume-card__header">Flat-Footed</span>
              <div class="resume-card__body">
                <span>{{ getFlatFooted }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-cards">
          <span class="resume-cards__header">Special Attributes</span>
          <div class="resume-cards__body">
            <div class="resume-card">
              <span class="resume-card__header">Spell Resistance</span>
              <div class="resume-card__body">
                <span>{{ spellResistance }}</span>
              </div>
            </div>
            <div class="resume-card">
              <span class="resume-card__header">Damage Reduction</span>
              <div class="resume-card__body">
                <span>{{ getTouchArmor }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-cards">
          <span class="resume-cards__header">Attacks</span>
          <div class="resume-cards__body--column">
            <span v-if="attacks.length <= 0"
                  class="list--no-items">No attacks</span>
            <div v-else
                 class="attacks">
              <div class="attacks__header">
                <span class="attacks__header__icon"></span>
                <span class="attacks__header__name">Attack</span>
                <span class="attacks__header__range">Range</span>
                <span class="attacks__header__hit">Hit</span>
                <span class="attacks__header__damage">Damage</span>
              </div>
              <div class="attacks__list">
                <div v-for="attack in attacks"
                     :key="attack._id"
                     class="attack">
                  <span class="attack__icon">
                    <i class="icon-high-shot">
                    </i>
                  </span>
                  <div class="attack__name">
                    <span>{{attack.name}}</span>
                    <small>Melee Weapon</small>
                  </div>
                  <div class="attack__range">
                    <span>{{attack.range}}</span>
                    <small>Reach</small>
                  </div>
                  <span class="attack__hit">{{attack.attackBonus}}</span>
                  <div class="attack__damage">
                    <div>
                      <span>{{attack.damage}}</span>
                      <i class="ra ra-drill"></i>
                    </div>
                    <small>{{attack.critical}}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import CharacterModule, { mapState, mapActions, mapGetters } from './Store';
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
      'keyAbilityScores',
      'speed',
      'status',
      'skills',
      'spellResistance',
      'damageReduction',
      'attacks'
    ]),
    ...mapGetters([
      'getTotalInitiative',
      'getBaseAttackBonus',
      'getGrappleTotal',
      'getTotalArmor',
      'getTouchArmor',
      'getFlatFooted'
    ]),
    orderedSkills() {
      return this.skills.orderBy(skill => skill.name);
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
    padding: 5px 5px 55px;
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
  border-radius: 10px 10px 0 0;

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
      flex-wrap: unset;
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
        @extend .text-4xl;
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

  padding: 10px;

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
  @extend .text-4xl;

  border: solid 1px black;
  border-radius: 50%;
  background-color: black;
  color: white;
  padding: 2px;
}

.list--no-items {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

$skill__is-class--width: 10%;
$skill__icon--width: 10%;
$skill__name--width: 55%;
$skill__key-ability--width: 15%;
$skill__modifier--width: 10%;

$skill__border-bottom-color: 1px solid #d8d8d8;

.skills {
  &__header {
    display: flex;

    span {
      @extend .text-xs;
      text-transform: uppercase;
      font-weight: bold;
    }

    &__is-class {
      width: $skill__is-class--width;
      text-align: center;
    }

    &__icon {
      width: $skill__icon--width;
      text-align: center;
    }

    &__name {
      width: $skill__name--width;
    }

    &__key-ability {
      width: $skill__key-ability--width;
      text-align: center;
    }

    &__modifier {
      width: $skill__modifier--width;
      text-align: center;
    }
  }

  &__list {
    > div:nth-child(even) {
      background-color: #80808012;
    }
  }
}

.skill {
  display: flex;
  align-items: center;
  height: 32px;

  > div {
    height: 100%;
  }

  &__is-class {
    @extend .skill__icon;
    @extend .text-sm;
    width: $skill__is-class--width;
    text-align: center;

    > label {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 1px dotted rgba(0, 0, 0, 0.8);
      border-radius: 50%;
    }

    .checked {
      background-color: black;
    }
  }

  &__icon {
    @extend .text-sm;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $skill__icon--width;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: $skill__name--width;
    border-bottom: $skill__border-bottom-color;

    span {
      @extend .text-sm;
    }

    small {
      @extend .text-xs;
    }
  }

  &__key-ability {
    @extend .skill__icon;
    text-transform: uppercase;
    font-weight: bold;
    width: $skill__key-ability--width;
    border-bottom: $skill__border-bottom-color;
    color: $secondary-value__color;
  }

  &__modifier {
    @extend .skill__icon;
    font-weight: bold;
    width: $skill__modifier--width;
    border-bottom: $skill__border-bottom-color;
  }
}

$attack__icon--width: 10%;
$attack__name--width: 34%;
$attack__range--width: 18%;
$attack__hit--width: 14%;
$attack__damage--width: 24%;

.attacks {
  &__header {
    display: flex;

    > span {
      @extend .text-xs;
      font-weight: bold;
      text-transform: uppercase;
    }

    &__icon {
      width: $attack__icon--width;
    }
    &__name {
      width: $attack__name--width;
    }
    &__range {
      width: $attack__range--width;
    }
    &__hit {
      width: $attack__hit--width;
    }
    &__damage {
      width: $attack__damage--width;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
}

.attack {
  display: flex;

  &__icon {
    @extend .skill__icon;
    width: $attack__icon--width;
  }

  &__name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: $attack__name--width;

    > span {
      @extend .text-sm;
    }

    > small {
      @extend .text-xs;
      color: $secondary-value__color;
    }
  }

  &__range {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: $attack__range--width;

    > span {
      @extend .text-sm;
      font-weight: bold;
    }

    > small {
      @extend .text-xs;
      color: $secondary-value__color;
    }
  }

  &__hit {
    @extend .text-base;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: $attack__hit--width;
  }

  &__damage {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: $attack__damage--width;

    i {
      margin-left: 3px;
    }

    span {
      @extend .text-sm;
    }

    small {
      @extend .text-2sm;
      color: $secondary-value__color;
    }
  }

  + .attack {
    margin-top: 8px;
    border-top: 1px dotted #eaeaea;
    padding-top: 8px;
  }
}
</style>
