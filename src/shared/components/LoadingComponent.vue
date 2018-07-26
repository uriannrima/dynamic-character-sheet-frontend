<template>
  <div>
    <transition name="loading-fade">
      <div class="loading-wrapper"
           v-show="isLoading">
        <section class="loading">
          This app is still under construction, so please avoid filling personal information
          <span class="loading__author"> - Guy behind this app</span>
          <span class="loading__anim"></span>
        </section>
      </div>
    </transition>
    <div v-show="!isLoading">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  z-index: 9999;
}

.loading {
  max-width: 50%;
  line-height: 1.4;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.loading__author {
  font-weight: normal;
  font-size: 0.9rem;
  color: rgba(189, 189, 189, 1);
  margin: 0.6rem 0 2rem 0;
  display: block;
}

.loading__anim {
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-left-color: rgba(3, 155, 229, 1);
  border-top-color: rgba(3, 155, 229, 1);
  border-radius: 50%;
  animation: rotate 600ms infinite linear;
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 1s;
}

.loading-fade-enter,
.loading-fade-leave-to {
  opacity: 0;
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>
