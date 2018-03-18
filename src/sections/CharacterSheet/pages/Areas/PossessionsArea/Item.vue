<template>
  <div class="item-component">
    <input type="text"
           class="common-input"
           :value="name"
           @change="$emit('onItemUpdate', { name: $event.target.value })">
    <input type="text"
           class="common-input"
           :value="page"
           @change="$emit('onItemUpdate', { page: $event.target.value })">
    <input type="number"
           class="common-input"
           step="0.1"
           :value="weight"
           @change="$emit('onItemUpdate', { weight: $event.target.value * 1 })">
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "page",
    "weight"
  ]
}
</script>

<style>
.item-component {
  display: grid;
  grid-template-columns: 70% 15% 15%;
}
</style>
