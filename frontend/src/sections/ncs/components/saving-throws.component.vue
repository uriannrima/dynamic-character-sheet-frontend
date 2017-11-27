<template>
  <div class="saving-throws-component">
    <div class="saving-throw-grid saving-throw-header">
      <label class="saving-throws-label">Saving Throws</label>
      <label class="total-label">Total</label>
      <label>Base<br>Save</label>
      <label>Ability<br>Modifier</label>
      <label>Magic<br>Modifier</label>
      <label>Misc<br>Modifier</label>
      <label>Temporary<br>Modifier</label>
    </div>
    <div v-for="n in 3" :key="n" class="saving-throw-grid">
      <div class="black-box saving-throw-box">
        <label>Fortitude</label>
        <label>(Constitution)</label>
      </div>
      <input type="number" class="common-input">
      <input type="number" class="common-input">
      <input type="number" class="common-input">
      <input type="number" class="common-input">
      <input type="number" class="common-input">
      <input type="number" class="common-input">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.saving-throws-component {
  display: grid;
  grid-template-rows: 20% repeat(3, 1fr);
  align-items: center;
}

.saving-throw-grid {
  display: grid;
  grid-template-columns: 30% repeat(6, 1fr);
  justify-items: center;
  align-items: center;
}

.saving-throw-header label {
  font-size: 50%;
  line-height: 8px;
  text-transform: uppercase;
  text-align: center;
}

.saving-throws-label {
  font-size: 80% !important;
  font-weight: bold;
}

.saving-throw-box {
  height: 120%;
}
</style>
