<template>
  <div class="login-container">
    <mdc-display class="app-title">Web DCS</mdc-display>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.login-container {
  padding: 1em;
  display: flex;
  flex-direction: column;

  .app-title {
    text-align: center;
  }
}
</style>
