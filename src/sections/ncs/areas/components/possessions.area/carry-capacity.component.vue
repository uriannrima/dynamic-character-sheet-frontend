<template>
  <div class="carry-capacity-component">
    <input type="number" class="common-input" v-model.number="carryCapacity.value">
    <label v-html="carryCapacity.label"></label>
    <small v-if="carryCapacity.small">{{carryCapacity.small}}</small>
  </div>
</template>

<script>
export default {
  props: ['carryCapacity']
}
</script>

<style>
.carry-capacity-component {
  text-align: center;
  line-height: 10px;
}

.carry-capacity-component label {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 70%;
}

.carry-capacity-component small {
  display: block;
  font-size: 65%;
}
</style>
