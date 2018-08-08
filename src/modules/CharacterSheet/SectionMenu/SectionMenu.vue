<template>
  <div :class="{ 'section-menu--opened' : open, 'section-menu' : !open }">
    <div class="section-menu__mask"
         v-show="open"
         @click="toggle"></div>
    <div class="section-menu__content">
      <div class="section-menu__menu"
           v-show="open">
        <section-menu-item v-for="section in sections"
                           :key="section"
                           :section="section"
                           @click="click">
        </section-menu-item>
      </div>
      <div class="section-menu__footer">
        <i class="material-icons sections-icons"
           @click="toggle">
          {{open ? 'close' : 'apps' }}
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import SectionMenuItem from './SectionMenuItem';

export default {
  components: { SectionMenuItem },
  props: {
    open: {
      type: Boolean,
      required: true
    },
    sections: {
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

.section-menu {
  position: fixed;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  padding: 10px;

  &--opened {
    @extend .section-menu;
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

.sections-icons {
  @extend .text-4xl;

  border: solid 1px black;
  border-radius: 50%;
  background-color: black;
  color: white;
  padding: 2px;
}
</style>
