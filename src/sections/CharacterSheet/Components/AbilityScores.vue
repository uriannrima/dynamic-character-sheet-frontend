<template>
  <div class="abilities-score-wrapper">
    <div class="abilities-scores-container">
      <div class="ability-score-component ability-score-header">
        <label>Ability<br>Name</label>
        <label>Ability<br>Score</label>
        <label>Ability<br>Modifier</label>
        <label>Temporary<br>Score</label>
        <label>Temporary<br>Modifier</label>
      </div>
      <ability-score v-for="(abilityScore, index) in abilityScores"
                     :key="index"
                     :index="index"
                     v-bind='abilityScore'
                     @onUpdateScore="$emit('onUpdateScore', $event)" />
    </div>
  </div>
</template>

<script>
import { AbilityScore } from '../Components';

export default {
  components: { AbilityScore },
  props: {
    abilityScores: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.abilities-score-wrapper {
  height: 100%;
}

.abilities-scores-container {
  height: 100%;
  display: grid;
  grid-template-rows: 10% repeat(6, 15%);
  grid-row-gap: 2px;
}

.ability-score-header > label {
  font-size: 50%;
  line-height: 9px;
  text-transform: uppercase;
  text-align: center;
}
</style>
