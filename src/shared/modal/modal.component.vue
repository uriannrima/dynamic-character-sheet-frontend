<script>
export default {
  props: ['show', 'onClose'],
  inject: {
    $validator: '$validator'
  },
  watch: {
    show: function (value) {
      document.body.style = value ? 'overflow-y:hidden;' : '';
    }
  },
  mounted: function () {
    // Add listener to the ESC button.
    document.addEventListener('keydown', (e) => {
      if (this.show && e.keyCode === 27) {
        if (this.onClose) this.onClose();
      }
    });
  },
  methods: {
    resetScroll: function () {
      this.$el.querySelector('.v-modal-container').scrollTop = 0;
    },
    close: function () {
      this.resetScroll();
      if (this.onClose) this.onClose();
    }
  }
}
</script>

<style>
.v-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.v-modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.v-modal-container {
  width: 75%;
  margin: 0px auto;
  padding: 5px 5px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  overflow-y: auto;
  max-height: 90%;
}

@media all and (max-width: 1023px) {
  .v-modal-container {
    margin-top: 0px;
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
}

.v-modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.v-modal-body {
  margin: 20px 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.v-modal-enter {
  opacity: 0;
}

.v-modal-leave-active {
  opacity: 0;
}

.v-modal-enter .v-modal-container,
.v-modal-leave-active .v-modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-close-button {
  float: right;
  margin-bottom: -18px;
  margin-right: 2px;
  color: white;
}
</style>

<template>
    <transition name="v-modal">
        <div class="v-modal-mask" @click="close" v-show="show">
            <div class="v-modal-container" @click.stop>
                <span class="modal-close-button glyphicon glyphicon-remove" @click="close"></span>
                <div class="v-modal-header">
                    <slot name="header">
                    </slot>
                </div>
                <div class="v-modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="v-modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
