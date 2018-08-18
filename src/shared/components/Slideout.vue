<template>
  <v-touch @swipe="handleSwipe"
           :swipe-options="{ direction: 'horizontal' }"
           id="menu"
           :style="styles.menu">
    <div class="slideout__panel">
      <div class="slideout__panel__top">
        <slot name="top"></slot>
      </div>
      <div class="slideout__panel__content"
           :style="styles.content">
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
  </v-touch>
</template>

<script>
import Slideout from 'slideout';

export default {
  props: {
    open: {
      type: Boolean,
      defaullt: false
    },
    panel: {
      type: String,
      required: true
    },
    padding: {
      type: Number,
      default: 0
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
  data: () => ({
    slideoutOpen: false
  }),
  computed: {
    styles() {
      var width = '100vw';
      if (
        this.padding &&
        this.padding > 0 &&
        this.padding <= document.body.clientWidth
      ) {
        width = `${this.padding}px`;
      }
      return {
        menu: {
          width
        },
        content: {
          width
        }
      };
    }
  },
  watch: {
    open: 'toggle'
  },
  mounted() {
    const { panel, menu, padding, tolerance, side } = this;
    this.slideoutRef = new Slideout({
      panel: document.querySelector(panel),
      menu: this.$el,
      padding: padding || document.body.clientWidth,
      tolerance,
      side
    });

    this.slideoutRef.on('open', () => {
      this.updateOpen(true);
    });

    for (var key in this.$listeners) {
      this.slideoutRef.on(key, this.$listeners[key]);
    }
  },
  destroyed() {
    this.slideoutRef.destroy();
  },
  methods: {
    handleSwipe($event) {
      if (
        (this.side === 'right' && $event.direction === 4) ||
        (this.side === 'left' && $event.direction === 2)
      ) {
        this.updateOpen(false);
      }
    },
    toggle(open) {
      if (open && !this.slideoutRef._opened) {
        this.slideoutRef.open();
      } else if (!open && this.slideoutRef._opened) {
        this.slideoutRef.close();
      }
    },
    updateOpen(open) {
      this.$emit('update:open', open);
    }
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
      padding: 10px 10px 0;
      overflow-y: auto;
      touch-action: pan-y;

      .default-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $secondary-value__color;
      }
      .vue-portal-target {
        flex: 1;
      }
    }
    &__bottom {
    }
  }
  &__toggle-button {
    position: absolute;
    top: 1%;
    right: 2%;
    font-size: 20px;
  }
}
</style>
