<template>
  <div class="weapon-component">
    <div class="main-weapon-container">
      <div class="weapon-header">
        <label>Attack</label>
      </div>
      <div class="weapon-header">
        <label>Attack Bonus</label>
      </div>
      <div class="weapon-header">
        <label>Damage</label>
      </div>
      <div class="weapon-header">
        <label>Critical</label>
      </div>
      <input type="text" class="common-input">
      <input type="text" class="common-input">
      <input type="text" class="common-input">
      <input type="text" class="common-input">
    </div>
    <div class="secondary-weapon-container">
      <div class="weapon-header">
        <label>Range</label>
      </div>
      <div class="weapon-header">
        <label>Type</label>
      </div>
      <div class="weapon-header">
        <label>Notes</label>
      </div>
      <input type="text" class="common-input">
      <input type="text" class="common-input">
      <input type="text" class="common-input">
    </div>
    <div class="ammunition-container">
      <label>Ammunition</label>
      <input type="text" class="common-input">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.weapon-component {
  display: grid;
  grid-template-rows: 40% 35% 1fr;
  padding-right: 5px;
}

.main-weapon-container {
  display: grid;
  grid-template-columns: 40% 30% 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
}

.secondary-weapon-container {
  display: grid;
  grid-template-columns: 15% 20% 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
}

.ammunition-container {
  display: grid;
  grid-template-columns: 20% 1fr;
  justify-items: center;
}

.weapon-component input {
  width: 100%;
}

.ammunition-container input {
  border-width: 0 0 1px 0;
  border-bottom: solid 1px black;
}

.weapon-header {
  background-color: black;
  color: white;
  width: 100%;
  text-align: center;
}

.weapon-header label {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
