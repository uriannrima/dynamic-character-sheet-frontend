<template>
  <div class="card">
    <slot name="media"></slot>
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  border: solid 1px black;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card-media {
  }
  .card-header {
  }
  .card-content {
  }
  .card-actions {
  }
}
</style>
