<template>
  <div class="status">
    <health-points :health-points="status.healthPoints"></health-points>
  </div>
</template>

<script>
import HealthPoints from './HealthPoints';

export default {
  components: { HealthPoints },
  props: {
    status: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.status {
  display: flex;
  flex-direction: column;
  min-width: 100px;
  justify-content: space-around;
  padding: 0 0.25rem;
}
</style>
