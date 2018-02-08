<template>
  <div class="weapon-component">
    <div class="weapon-wrapper">
      <div class="weapon-name weapon-header weapon-name-header">
        <span style="font-size: 16px;">Weapon</span>
      </div>
      <div class="weapon-header">
        <span>Attack Bonus</span>
      </div>
      <div class="weapon-header">
        <span>Damage</span>
      </div>
      <div class="weapon-header">
        <span>Critical</span>
      </div>
      <div class="weapon-name">
        <input type="text" v-model="weapon.name">
      </div>
      <div class="weapon-attack-bonus">
        <input type="text" v-model.number="weapon.attackBonus">
      </div>
      <div class="weapon-damage">
        <input type="text" v-model="weapon.damage">
      </div>
      <div class="weapon-critical">
        <input type="text" v-model="weapon.critical">
      </div>
      <div class="weapon-header">
        <span>Range</span>
      </div>
      <div class="weapon-header">
        <span>Type</span>
      </div>
      <div class="weapon-notes weapon-header">
        <span>Notes</span>
      </div>
      <div class="weapon-range">
        <input type="text" v-model="weapon.range">
      </div>
      <div class="weapon-type">
        <input type="text" v-model="weapon.type">
      </div>
      <div class="weapon-notes">
        <input type="text" v-model="weapon.notes">
      </div>
    </div>
    <div class="ammunition-wrapper">
      <div class="ammunition-header">
        <span>Ammunition</span>
      </div>
      <div><input type="text" class="only-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weapon']
}
</script>

<style>
.weapon-component {
  display: grid;
  grid-template-rows: 1fr 15%;
}

.weapon-component input {
  font-size: 12px;
  text-align: center;
}

.weapon-wrapper,
.ammunition-wrapper {
  align-self: stretch;
}

.weapon-wrapper {
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

.weapon-header {
  align-self: end;
  background-color: black;
  color: white;
  text-align: center;
}

.ammunition-header {
  text-align: center;
}

.weapon-name-header {
  height: 100%;
  align-self: center;
  border-radius: 5px 5px 0px 0px;
  display: grid;
  align-items: center;
}

.weapon-name {
  grid-column-end: span 3;
}

.weapon-notes {
  grid-column-end: span 4;
}

.weapon-name,
.weapon-attack-bonus,
.weapon-damage,
.weapon-critical,
.weapon-range,
.weapon-type,
.weapon-notes {
  height: 98%;
}
</style>
