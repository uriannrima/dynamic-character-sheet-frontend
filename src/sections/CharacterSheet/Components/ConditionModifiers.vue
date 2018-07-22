<template>
  <div class="condition-modifiers-component">
    <div>
      <label class="condition-modifiers-label">condition Modifiers</label>
      <textarea class="common-textarea"
                :value="conditionModifiers"
                @change="$emit('updateConditionModifiers', { conditionModifiers: $event.target.value })"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ['conditionModifiers']
}
</script>

<style>
.condition-modifiers-component {
  display: grid;
  grid-template-rows: 1fr;
  text-align: center;
}

.condition-modifiers-label {
  position: absolute;
  font-size: 55%;
  text-transform: uppercase;
  margin-left: 2px;
}
</style>
