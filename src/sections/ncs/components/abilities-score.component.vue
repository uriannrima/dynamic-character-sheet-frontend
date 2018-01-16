<template>
  <div class="abilities-scores-container">
    <div class="ability-score-component ability-score-header">
      <label>Ability<br>Name</label>
      <label>Ability<br>Score</label>
      <label>Ability<br>Modifier</label>
      <label>Temporary<br>Score</label>
      <label>Temporary<br>Modifier</label>
    </div>
    <ability-score v-for="(abilityScore, index) in character.abilityScores" :key="index" :index="index" :name="abilityScore.name" :value="abilityScore.value" :tempValue="abilityScore.tempValue" @onUpdateScore="updateScore($event)" />
  </div>
</template>

<script>
import AbilityScore from './ability-score.component';
import CharacterStore from 'Store/character.store';

export default {
  components: {
    AbilityScore
  },
  methods: {
    updateScore: function ({ index, field, value }) {
      var abilityScore = this.character.abilityScores[index];
      abilityScore[field] = value;
    }
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
