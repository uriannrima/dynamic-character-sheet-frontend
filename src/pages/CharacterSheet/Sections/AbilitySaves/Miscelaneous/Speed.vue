<template>
  <div class="resume-card">
    <span class="resume-card__header">Speed</span>
    <div class="resume-card__body">
      <span>{{ speed }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    speed: {
      type: [String, Number],
      default: 0
    }
  }
};
</script>

<style>
</style>
