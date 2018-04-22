<template>
  <div class="arcane-spell-failure-component">
    <div class="black-box">
      <label>Arcane Spell Failure</label>
    </div>
    <input type="text"
           class="common-input"
           readonly
           :value="spellFailure | percentage">
  </div>
</template>

<script>
export default {
  filters: {
    percentage: function (value) {
      return value.toString() + "%";
    }
  },
  props: {
    spellFailure: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
.arcane-spell-failure-component {
  display: grid;
  grid-template-columns: 75% auto;
  grid-column-gap: 2px;
}

.arcane-spell-failure-component > input {
  text-align: center;
}
</style>
