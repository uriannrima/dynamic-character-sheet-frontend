<template>
  <transition name="fade"
              enter-active-class="fade-in"
              leave-active-class="fade-out"
              v-on="hooks">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 500
    }
  },
  computed: {
    hooks() {
      const { beforeEnter, afterEnter, beforeLeave, leave, afterLeave } = this;

      return {
        beforeEnter,
        afterEnter,
        beforeLeave,
        leave,
        afterLeave
      };
    }
  },
  methods: {
    beforeEnter(el) {
      let enterDuration = this.duration.enter
        ? this.duration.enter
        : this.duration;
      el.style.animationDuration = `${enterDuration / 1000}s`;
      this.$emit('before-enter');
    },
    afterEnter(el) {
      el.style.animationDuration = '';
      this.$emit('after-enter');
    },
    beforeLeave(el) {
      let leaveDuration = this.duration.leave
        ? this.duration.leave
        : this.duration;
      el.style.animationDuration = `${leaveDuration / 1000}s`;
      this.$emit('before-leave');
    },
    leave(el) {
      this.$emit('leave');
    },
    afterLeave(el) {
      el.style.animationDuration = '';
      this.$emit('after-leave');
    }
  }
};
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation-name: fade-in;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-out {
  animation-name: fade-out;
}
</style>
