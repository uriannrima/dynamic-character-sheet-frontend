<template>
  <div class="details">
    <div class="details__avatar">
      <avatar :icon-name="iconName"
              :icon-color="iconColor"></avatar>
    </div>
    <div class="details__body">
      <span class="details__body__main">
        {{name}}
        <small class="details__body__race">({{race}})</small>
      </span>
      <div class="details__body__classes">
        <span>{{classes.map(classe => classe.name.charAt(0).toUpperCase() + classe.name.slice(1)).join(' / ')}}</span>
      </div>
      <span class="details__body__level">
        <span>{{classes.map(classe => `Level ${classe.level}`).join(' / ')}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar';

export default {
  components: { Avatar },
  props: {
    iconName: {
      type: String,
      default: 'ra-ball'
    },
    iconColor: {
      type: String,
      default: 'purple'
    },
    name: {
      type: String,
      default: ''
    },
    race: {
      type: String,
      default: ''
    },
    classes: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.details {
  display: flex;
  align-items: center;
  padding: 0 5px;
  width: 70%;

  &__body {
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    &__main {
      @extend .text-lg;
      color: white;
    }

    &__race {
      @extend .text-xs;
      color: darkgray;
    }

    &__classes {
      @extend .text-xs;
      color: darkgray;
      display: flex;
    }

    &__level {
      @extend .text-xs;
      color: lightgray;
    }
  }
}
</style>
