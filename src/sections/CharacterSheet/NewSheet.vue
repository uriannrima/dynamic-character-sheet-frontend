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
                Uriann
                <small class="details__body__race">(Half-Elf)</small>
              </span>
              <div class="details__body__classes">
                <span>Wizard / M. Specialist / Fatespinner</span>
              </div>
              <span class="details__body__level">
                <span>Level 1 / Level 2 / Level 3</span>
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
              333/333
            </span>
          </div>
        </div>
      </header>
      <div class="sheet__section">
        <div class="resume-cards">
          <span class="resume-cards__header">Ability Scores</span>
          <div class="resume-cards__body">
            <div v-for="abilityScore in abilityScores"
                 :key="abilityScore.name"
                 class="resume-card">
              <span class="resume-card__header">{{abilityScore.name}}</span>
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
                 class="resume-card">
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
    </div>
  </loading-component>
</template>

<script>
import CharacterModule, { mapState, mapActions } from './Store';
import VuexComponent from 'shared/mixins/vuex.component';
import { LoadingComponent } from 'shared/components';

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
      vm.loadSheet(vm.id);
      vm.isLoading = false;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    this.loadSheet(to.params.id);
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
    iconName: 'ra-aura',
    iconColor: 'black'
  }),
  computed: {
    ...mapState([
      'abilityScores',
      'savingThrows',
      'initiativeModifier',
      'keyAbilityScores',
      'speed'
    ]),
    totalInitiative() {
      return (
        this.abilityScores[this.keyAbilityScores.initiative].tempModifier +
        this.initiativeModifier
      );
    }
  },
  methods: {
    ...mapActions(['loadCharacter', 'newCharacter']),
    loadSheet(characterId) {
      if (!characterId) {
        this.newCharacter();
      } else {
        this.loadCharacter(characterId);
      }
    },
    getModifierSign(abilityScore) {
      return abilityScore.tempModifier >= 0 ? '+' : '-';
    },
    getSavingThrowTotal(savingThrow) {
      return (
        this.abilityScores[savingThrow.keyAbility].tempModifier +
        savingThrow.total
      );
    }
  }
};
</script>

<style lang="scss">
@import '../../../public/styles/variables.scss';

.sheet {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
    padding: 2px 0;
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
  margin-bottom: 5px;
  border-radius: 10px;

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
  }

  .resume-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    text-align: center;
    border: solid 1px black;
    margin: 10px 3px;
    border-radius: 5px;

    &__header {
      @extend .text-xs;
      font-weight: bold;
      color: white;

      border: solid 1px black;
      border-radius: 5px;
      margin-top: -8px;
      background-color: black;
      width: 78px;

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
        width: 42px;
      }
    }
  }
}
</style>
