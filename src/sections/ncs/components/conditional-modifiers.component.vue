<template>
  <div class="conditional-modifiers-component">
    <div>
      <label class="conditional-modifiers-label">Conditional Modifiers</label>
      <textarea></textarea>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.conditional-modifiers-component {
  display: grid;
  grid-template-rows: 1fr;
  text-align: center;
}

.conditional-modifiers-component textarea {
  width: 100%;
  height: 100%;
}

.conditional-modifiers-label {
  position: absolute;
  font-size: 50%;
  text-transform: uppercase;
  margin-left: 2px;
}
</style>
