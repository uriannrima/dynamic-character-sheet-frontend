<template>
  <div class="abilities-scores-container">
    <div class="ability-score-component ability-score-header">
      <label>Ability<br>Name</label>
      <label>Ability<br>Score</label>
      <label>Ability<br>Modifier</label>
      <label>Temporary<br>Score</label>
      <label>Temporary<br>Modifier</label>
    </div>
    <ability-score v-for="(abilityScore, index) in character.abilityScores" :key="index" :abilityScore="abilityScore" />
  </div>
</template>

<script>
import AbilityScore from './ability-score.component';
import CharacterStore from 'Store/character.store';

export default {
  components: {
    AbilityScore
  },
  computed: {
    character: {
      get() {
        return CharacterStore.Instance.character;
      }
    }
  }
}
</script>

<style>
.abilities-scores-container {
  height: 100%;
  display: grid;
  grid-template-rows: 10% repeat(6, 15%);
}

.ability-score-header > label {
  font-size: 50%;
  line-height: 9px;
  text-transform: uppercase;
  text-align: center;
}
</style>
