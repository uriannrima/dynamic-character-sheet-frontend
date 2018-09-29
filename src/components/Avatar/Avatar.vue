<template>
  <div class="avatar">
    <avatar-wrapper v-bind="$props">
      <avatar-icon class="ra"
                   v-bind="$props"
                   :class="iconName">
      </avatar-icon>
    </avatar-wrapper>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

const props = {
  size: VueTypes.string.def('3em'),
  iconName: VueTypes.string.def('ra-ball'),
  iconColor: VueTypes.string.def('purple'),
  iconSize: VueTypes.string.def('2.6em')
};

export default {
  props
};
</script>
<style lang="scss" scoped>
.avatar {
  padding: 0 0.25rem;
}
</style>
