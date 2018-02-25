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
      <ability-score v-for="(abilityScore, index) in character.abilityScores"
                     :key="index"
                     :index="index"
                     :name="abilityScore.name"
                     :value="abilityScore.value"
                     :tempValue="abilityScore.tempValue"
                     @onUpdateScore="updateScore($event)" />
    </div>
  </div>
</template>

<script>
import { AbilityScore } from './';
import CharacterMixin from 'Store/character.mixin';
import MinimizableMixin from 'Shared/mixins/states/minimizable.mixin';

export default {
  mixins: [CharacterMixin, MinimizableMixin],
  components: { AbilityScore },
  methods: {
    updateScore: function ({ index, field, value }) {
      var abilityScore = this.character.abilityScores[index];
      abilityScore[field] = value;
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
