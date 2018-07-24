<template>
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
            <span class="details__body__heading">
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
          <span class="hitpoints__heading">
            Hit Points
          </span>
          <span class="hitpoints__value">
            333/333
          </span>
        </div>
      </div>
    </header>
    <div class="sheet__section">
      <div class="scores-resume">
        <div v-for="abilityScore in abilityScores"
             :key="abilityScore.name"
             class="scores-resume__ability-score">
          <span class="scores-resume__ability-score__heading">{{abilityScore.name}}</span>
          <div class="scores-resume__ability-score__value">
            <span>
              {{abilityScore.tempModifier}}
            </span>
          </div>
          <small>({{abilityScore.tempValue}})</small>
        </div>
      </div>
      <div class="savings-resume">
        <span class="savings-resume__heading">Saving Throws</span>
        <div class="savings-resume__saving-throws-container">
          <div v-for="savingThrow in savingThrows"
               :key="savingThrow.name"
               class="savings-resume__saving-throw">
            <span class="savings-resume__saving-throw__heading">{{savingThrow.name}}</span>
            <div class="savings-resume__saving-throw__value">
              <span>
                {{getSavingThrowTotal(savingThrow)}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterModule, { mapState } from './Store';
import VuexComponent from 'shared/mixins/vuex.component';

export default {
  mixins: [VuexComponent('Character', CharacterModule)],
  data: () => ({
    iconName: 'ra-aura',
    iconColor: 'black'
  }),
  computed: {
    ...mapState(['abilityScores', 'savingThrows'])
  },
  methods: {
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
  height: 120vh;
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

    &__details {
      display: flex;
      width: 70%;
    }
  }

  &__section {
    padding: 2px 0;
    border-width: 2px 0;
    border-style: solid;
    border-color: red;
  }

  &__subsection {
    padding: 5px 0;
    flex: 1;
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

    &__heading {
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

  &__heading {
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

  &__heading {
    @extend .text-xs;
    font-weight: bold;
    color: white;

    border: solid 1px black;
    border-radius: 5px;
    margin-top: -8px;
    background-color: black;
    width: 78px;
  }

  &__value {
    display: flex;
    justify-content: center;
    position: relative;

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
  }
}

.scores-resume {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  &__ability-score {
    @extend .resume-card;
    height: 95px;

    &__heading {
      @extend .resume-card__heading;
    }

    &__value {
      @extend .resume-card__value;
    }

    span {
      display: block;
      text-transform: uppercase;
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

.savings-resume {
  display: flex;
  flex-direction: column;
  text-align: center;

  margin-top: 5px;
  border-top: solid 2px red;
  padding: 5px;

  &__heading {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__saving-throws-container {
    display: flex;
    justify-content: space-around;
  }

  &__saving-throw {
    @extend .resume-card;

    &__heading {
      @extend .resume-card__heading;
    }

    &__value {
      @extend .resume-card__value;
    }
  }
}
</style>
