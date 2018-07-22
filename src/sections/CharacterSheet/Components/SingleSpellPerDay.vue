<template>
  <div class="single-spd-component">
    <input type="number"
           class="common-input"
           readonly
           :value="spellsPerLevel">
    <input type="number"
           class="common-input"
           readonly
           :value="10 + (spellLevel * 1) + keyAbilityModifier">
    <label v-if="spellLevel == 0">0</label>
    <label v-if="spellLevel == 1">1st</label>
    <label v-if="spellLevel == 2">2nd</label>
    <label v-if="spellLevel == 3">3rd</label>
    <label v-if="spellLevel >= 4">{{spellLevel}}th</label>
    <input type="number"
           class="common-input"
           v-model.number="spellPerDay.spellsPerDay">
    <label v-if="spellLevel == 0">0</label>
    <input v-else
           type="number"
           class="common-input"
           v-model.number="spellPerDay.bonusSpells">
  </div>
</template>

<script>
export default {
  props: [
    'spellsPerLevel',
    'spellPerDay',
    'spellLevel',
    'keyAbilityModifier'
  ]
}
</script>

<style>
.single-spd-component > label {
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
}
</style>
