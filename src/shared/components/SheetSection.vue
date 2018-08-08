<template>
  <div class="sheet__section">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.sheet {
  &__section {
    padding: 5px 5px 55px;
  }
}
</style>
