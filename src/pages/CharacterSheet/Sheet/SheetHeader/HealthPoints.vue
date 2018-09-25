<template>
  <div class="health-points">
    <span class="health-points__header">
      Health Points
    </span>
    <span class="health-points__value">
      {{`${healthPoints} / ${healthPoints}`}}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    healthPoints: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.health-points {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  border: solid 1px red;
  border-radius: 2px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #ffffff2b;

  &__header {
    @extend .text-2xs;
    text-transform: uppercase;
  }

  &__value {
    @extend .text-xl;
  }
}
</style>
