<template>
  <div class="conditional-modifiers-component">
    <div>
      <label class="conditional-modifiers-label">Conditional Modifiers</label>
      <textarea class="common-textarea"
                v-model.trim="conditionalModifier"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ['conditionalModifier']
}
</script>

<style>
.conditional-modifiers-component {
  display: grid;
  grid-template-rows: 1fr;
  text-align: center;
}

.conditional-modifiers-label {
  position: absolute;
  font-size: 55%;
  text-transform: uppercase;
  margin-left: 2px;
}
</style>
