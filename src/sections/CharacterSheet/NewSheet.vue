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
        <div class="scores-resume__ability-score">
          <span class="scores-resume__ability-score__heading">Strength</span>
          <span class="scores-resume__ability-score__value">10
            <small>(0)</small>
          </span>
        </div>
        <div class="scores-resume__ability-score">
          <span class="scores-resume__ability-score__heading">Dexterity</span>
          <span class="scores-resume__ability-score__value">16
            <small>(+3)</small>
          </span>
        </div>
        <div class="scores-resume__ability-score">
          <span class="scores-resume__ability-score__heading">Constitution</span>
          <span class="scores-resume__ability-score__value">12
            <small>(+1)</small>
          </span>
        </div>
        <div class="scores-resume__ability-score">
          <span class="scores-resume__ability-score__heading">Intelligence</span>
          <span class="scores-resume__ability-score__value">22
            <small>(+6)</small>
          </span>
        </div>
        <div class="scores-resume__ability-score">
          <span class="scores-resume__ability-score__heading">Wisdom</span>
          <span class="scores-resume__ability-score__value">11
            <small>(0)</small>
          </span>
        </div>
        <div class="scores-resume__ability-score">
          <span class="scores-resume__ability-score__heading">Charisma</span>
          <span class="scores-resume__ability-score__value">14
            <small>(+2)</small>
          </span>
        </div>
      </div>
    </div>
    <div class="sheet__subsection">
      Sub Section
      <input v-model="iconName">
      <input v-model="iconColor">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    iconName: 'ra-aura',
    iconColor: 'black'
  })
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

.scores-resume {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  &__ability-score {
    flex: 30%;
    text-align: center;
    border: solid 1px black;
    margin: 3px;
    border-radius: 5px;

    &__heading {
      @extend .text-sm;
      font-weight: bold;
      color: gray;
    }

    &__value {
      @extend .text-2xl;
      font-weight: bold;
    }

    span {
      display: block;
      text-transform: uppercase;
    }
  }
}
</style>
