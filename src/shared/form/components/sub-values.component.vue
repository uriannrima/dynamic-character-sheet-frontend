<template>
  <div class="sub-value-container">
    <button @click="createSubValue">Add subvalue</button>
    <div v-for="(subValue, index) in model.subValues"
         :key="index"
         class="sub-value-component">
      <span>Title:</span>
      <input type="text"
             v-model="subValue.title">
      <span>Value:</span>
      <input type="text"
             v-model="subValue.value">
      <span class="glyphicon glyphicon-remove"
            @click="removeSubValue(index)"></span>
    </div>
  </div>
</template>

<script>
import { SubValue } from 'domain/sub-value';

export default {
  props: ['model'],
  methods: {
    createSubValue() {
      this.model.subValues.push(new SubValue());
    },
    removeSubValue(index) {
      this.model.subValues.removeAt(index);
    }
  }
};
</script>

<style>
</style>
