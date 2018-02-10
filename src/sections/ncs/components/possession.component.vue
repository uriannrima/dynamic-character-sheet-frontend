<template>
  <div>
    <div class="total-possesion" v-if="possession.isTotal">
      <label v-if="possession.isTotal">Total Weight Carried</label>
      <input type="number" class="common-input" readonly v-model.number="possession.weight">
    </div>
    <div class="possesion-component" v-else>
      <input type="text" class="common-input" v-model="possession.name">
      <input type="text" class="common-input" v-model="possession.page">
      <input type="number" class="common-input" step="0.1" v-model.number="possession.weight">
    </div>
  </div>
</template>

<script>
export default {
  props: ["possession"]
}
</script>

<style>
.possesion-component {
  display: grid;
  grid-template-columns: 70% 15% 15%;
}

.total-possesion {
  display: grid;
  grid-template-columns: 70% 30%;
}

.total-possesion label {
  font-weight: bolder;
  border: solid 1px black;
  text-align: center;
  text-transform: uppercase;
}
</style>
