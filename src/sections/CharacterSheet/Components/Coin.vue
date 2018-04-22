<template>
  <div class="coin-component">
    <label :title="title">{{label}} —</label>
    <input type="number"
           :value="value"
           @change="$emit('onCoinUpdate', { value: $event.target.value * 1 })">
  </div>
</template>

<script>
export default {
  props: ["value", "label", "title"]
};
</script>

<style>
.coin-component {
  display: grid;
  grid-template-columns: 20% auto;
  text-align: center;
}
</style>
