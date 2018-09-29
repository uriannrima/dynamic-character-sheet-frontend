<template>
  <div :class="{ 'fab-menu--opened' : open, 'fab-menu' : !open }">
    <div class="fab-menu__mask"
         v-show="open"
         @click="toggle"></div>
    <div class="fab-menu__content">
      <div class="fab-menu__menu"
           v-show="open">
        <fab-menu-item v-for="(item, $index) in items"
                       :key="$index"
                       :item="item"
                       @click="click">
        </fab-menu-item>
      </div>
      <div class="fab-menu__footer">
        <i class="material-icons fab-menu-icons"
           @click="toggle">
          {{open ? 'close' : 'apps' }}
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e);
    },
    toggle(e) {
      this.$emit('toggle', e);
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.fab-menu {
  position: fixed;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  padding: 10px;
  z-index: 1;

  &--opened {
    @extend .fab-menu;
    top: 0;
    left: 0;
  }

  &__mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
  }

  &__content {
    flex: 1;
    z-index: 1;
  }

  &__menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.fab-menu-icons {
  @extend .text-4xl;

  border: solid 1px black;
  border-radius: 50%;
  background-color: #0000006b;
  color: white;
  padding: 2px;
}
</style>
