<template>
  <div class="resume-card">
    <span class="resume-card__header">Initiative</span>
    <div class="resume-card__body">
      <span>{{initiative | signed}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initiative: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
