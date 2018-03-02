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
               @change="updateTempScore($event, 'tempValue')">
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
  props: ['index', 'name', 'value', 'tempValue', 'modifier', 'tempModifier'],
  methods: {
    updateScore($event, field) {
      var abilityScore = { name: this.name };
      abilityScore['value'] = $event.target.value * 1;
      abilityScore['tempValue'] = $event.target.value * 1;
      this.$emit('onUpdateScore', { abilityScore });
    },
    updateTempScore($event, field) {
      var abilityScore = { name: this.name };
      abilityScore['tempValue'] = $event.target.value * 1;
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
