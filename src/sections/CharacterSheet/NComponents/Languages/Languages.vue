<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Languages</span>
    <div class="resume-cards__body--column">
      <span v-if="languages.length <= 0"
            class="list--no-items">No languages</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    languages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>
