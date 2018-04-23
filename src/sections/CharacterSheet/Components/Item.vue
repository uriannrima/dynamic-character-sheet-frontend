<template>
  <div class="item-component">
    <input type="number"
           class="common-input"
           :value="1">
    <div style="position: relative;">
      <input type="text"
             class="common-input"
             :value="name"
             @change="$emit('onItemUpdate', { name: $event.target.value })">
      <span class="item-drag-handler glyphicon glyphicon-move"></span>
    </div>
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
  grid-template-columns: 5% 65% 15% 15%;
}

.item-drag-handler {
  position: absolute;
  right: 5px;
  top: 20%;
}
</style>
