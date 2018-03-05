<template>
  <div>
    <div class="ability-score-component">
      <div class="black-box">
        <label>{{name.substring(0,3)}}</label>
        <label>{{name}}</label>
      </div>
      <input type="number"
             class="ability-score-input"
             :value="value"
             @change="updateScore($event);">
      <input type="number"
             class="ability-score-input"
             readonly
             :value="modifier">
      <div class="temporary-box">
        <input type="number"
               class="ability-score-temp-input"
               :value="tempValue"
               @change="updateScore($event, true)">
      </div>
      <div class="temporary-box">
        <input type="number"
               class="ability-score-temp-input"
               readonly
               :value="tempModifier">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['index', 'name', 'value', 'tempValue'],  
  computed: {
    modifier() {
      return Math.floor((this.value - 10) / 2);
    },
    tempModifier() {
      return Math.floor((this.tempValue - 10) / 2);
    }
  },
  methods: {
    updateScore($event, tempOnly) {
      var abilityScore = { name: this.name };
      if (!tempOnly) {
        abilityScore.value = $event.target.value * 1;
        abilityScore.modifier = this.modifier;
      }
      abilityScore.tempValue = $event.target.value * 1;
      abilityScore.tempModifer = this.tempModifier;
      this.$emit('onUpdateScore', { abilityScore });
    }
  }
}
</script>

<style>
.ability-score-component {
  display: grid;
  grid-template-columns: 25% repeat(4, 18.75%);
}

.ability-score-component input {
  width: 75%;
  height: 75%;
  margin: 2px auto;
}

.ability-score-input {
  border: solid 1px black;
}

.ability-score-temp-input {
  border: none;
}
</style>
