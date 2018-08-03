<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Special Abilities</span>
    <div class="resume-cards__body--column">
      <span v-if="specialAbilities.length <= 0"
            class="list--no-items">No special abilities</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    specialAbilities: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
</style>
