<template>
  <div class="avatar">
    <i class="avatar__icon ra"
       :class="iconName"
       :style="{color : iconColor}"></i>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'ra-ball'
    },
    iconColor: {
      type: String,
      default: 'purple'
    }
  }
};
</script>

<style lang="scss">
.avatar {
  width: 3em;
  height: 3em;
  border-radius: 10%;
  border: solid 1px black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &__icon {
    font-size: 2.6em;
    color: darkgoldenrod;
  }
}
</style>
