<template>
  <mdc-card class="base-form-card">
    <form class="base-form">
      <slot></slot>
    </form>
    <slot name="footer">
    </slot>
  </mdc-card>
</template>

<style scoped lang="scss">
.base-form-card {
  text-align: center;
}

.base-form {
  padding: 1em;
  display: flex;
  flex-direction: column;
}
</style>
