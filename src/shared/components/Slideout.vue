<template>
  <div id="menu">
    <div class="slideout__panel">
      <div class="slideout__panel__top">
        <slot name="top"></slot>
      </div>
      <div class="slideout__panel__content">
        <slot>
          <div class="default-content">
            <span>Nothing selected.</span>
          </div>
        </slot>
      </div>
      <div class="slideout__panel__bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Slideout from 'slideout';

export default {
  props: {
    panel: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      default: '#menu'
    },
    padding: {
      type: Number,
      default: 295
    },
    tolerance: {
      type: Number,
      default: 70
    },
    side: {
      type: String,
      default: 'right'
    }
  },
  mounted() {
    const { panel, menu, padding, tolerance, side } = this;
    this.slideoutRef = new Slideout({
      panel: document.querySelector(panel),
      menu: document.querySelector(menu),
      padding,
      tolerance,
      side
    });
  },
  destroyed() {
    this.slideoutRef.destroy();
  }
};
</script>

<style lang="scss">
@import '~public/styles/variables.scss';

body {
  width: 100%;
  height: 100%;
}

.slideout {
  &-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 295px;
    min-height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
    &-left {
      left: 0;
    }
    &-right {
      right: 0;
    }
  }
  &-panel {
    position: relative;
    z-index: 1;
    will-change: transform;
    background-color: #fff;
    /* A background-color is required */
    min-height: 100vh;
  }
  &-open,
  &-open body,
  &-open &-panel {
    overflow: hidden;
  }
  &-open &-menu {
    display: flex;
    flex-direction: column;
  }

  &__panel {
    display: flex;
    flex-direction: column;
    flex: 1;

    &__top {
    }
    &__content {
      display: flex;
      border-left: 3px solid #c53131;
      border-right: 3px solid #c53131;
      flex: 1;
      background: #fff;
      padding: 0 10px;
      overflow-y: auto;
      min-width: 295px;

      .default-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $secondary-value__color;
      }
    }
    &__bottom {
    }
  }
}
</style>
