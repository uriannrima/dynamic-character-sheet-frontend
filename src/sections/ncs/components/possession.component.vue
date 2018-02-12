<template>
  <div class="possesion-component">
    <input type="text" class="common-input" v-model="possession.name">
    <input type="text" class="common-input" v-model="possession.page">
    <input type="number" class="common-input" step="0.1" v-model.number="weight">
  </div>
</template>

<script>
export default {
  props: ["possession"],
  computed: {
    weight: {
      get() {
        return this.possession.weight;
      },
      set(value) {
        console.log(value);
        value = value.replace('.', '.');
        this.possession.weight = value;
      }
    }
  }
}
</script>

<style>
.possesion-component {
  display: grid;
  grid-template-columns: 70% 15% 15%;
}
</style>
