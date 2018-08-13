<template>
  <div class="panel">
    <slot name="header"
          class="panel__header">
    </slot>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.panel {
  &__header {
    margin-bottom: 10px;
  }
}
</style>
