<template>
  <div class="abilities-score-wrapper">
    <div class="black-box rounded h-md-up">
      <div>
        <label>Abilities Score</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <div class="abilities-scores-container"
         v-show="!minimize">
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
                     v-bind='$extract(abilityScore)'
                     @onUpdateScore="$emit('onUpdateScore', $event)" />
    </div>
  </div>
</template>

<script>
import { AbilityScore } from '../Components';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';

export default {
  components: { AbilityScore },
  mixins: [MinimizableMixin],
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
}

.ability-score-header > label {
  font-size: 50%;
  line-height: 9px;
  text-transform: uppercase;
  text-align: center;
}
</style>
