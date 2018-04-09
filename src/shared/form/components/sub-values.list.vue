<template>
  <div v-if="model.subValues && model.subValues.length >= 1" class="sub-value-renderer-container">
    <div class="sub-value-rendered-component" v-for="(subValue, index) in model.subValues" :key="index">
      <span>
        <strong>{{subValue.title}}:</strong>
      </span>
      <span>{{subValue.value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>

<style>

</style>
