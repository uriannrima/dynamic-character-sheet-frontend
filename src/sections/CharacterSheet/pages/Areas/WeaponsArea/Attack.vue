<template>
  <div class="attack-component">
    <div class="attack-wrapper">
      <div class="attack-name attack-header attack-name-header">
        <span style="font-size: 16px;">Attack</span>
      </div>
      <div class="attack-header">
        <span>Attack Bonus</span>
      </div>
      <div class="attack-header">
        <span>Damage</span>
      </div>
      <div class="attack-header">
        <span>Critical</span>
      </div>
      <div class="attack-name">
        <input type="text"
               v-model="attack.name">
      </div>
      <div class="attack-attack-bonus">
        <input type="text"
               v-model="attack.attackBonus">
      </div>
      <div class="attack-damage">
        <input type="text"
               v-model="attack.damage">
      </div>
      <div class="attack-critical">
        <input type="text"
               v-model="attack.critical">
      </div>
      <div class="attack-header">
        <span>Range</span>
      </div>
      <div class="attack-header">
        <span>Type</span>
      </div>
      <div class="attack-notes attack-header">
        <span>Notes</span>
      </div>
      <div class="attack-range">
        <input type="text"
               v-model="attack.range">
      </div>
      <div class="attack-type">
        <input type="text"
               v-model="attack.type">
      </div>
      <div class="attack-notes">
        <input type="text"
               v-model="attack.notes">
      </div>
    </div>
    <div class="ammunition-wrapper">
      <div class="ammunition-header">
        <span>Ammunition</span>
      </div>
      <div><input type="text"
               class="only-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['attack']
}
</script>

<style>
.attack-component {
  display: grid;
  grid-template-rows: 1fr 15%;
}

.attack-component input {
  font-size: 12px;
  text-align: center;
}

.attack-wrapper,
.ammunition-wrapper {
  align-self: stretch;
}

.attack-wrapper {
  display: grid;
  grid-template-columns: 15% 15% 10% 25% 1fr 1fr;
  grid-template-rows: 29% 29% 12% 29%;
  grid-column-gap: 1px;
}

.ammunition-wrapper {
  display: grid;
  grid-template-columns: 15% 1fr;
  grid-template-rows: 100%;
}

.attack-header {
  align-self: end;
  background-color: black;
  color: white;
  text-align: center;
}

.ammunition-header {
  text-align: center;
}

.attack-name-header {
  height: 100%;
  align-self: center;
  border-radius: 5px 5px 0px 0px;
  display: grid;
  align-items: center;
}

.attack-name {
  grid-column-end: span 3;
}

.attack-notes {
  grid-column-end: span 4;
}

.attack-name,
.attack-attack-bonus,
.attack-damage,
.attack-critical,
.attack-range,
.attack-type,
.attack-notes {
  height: 98%;
}
</style>
