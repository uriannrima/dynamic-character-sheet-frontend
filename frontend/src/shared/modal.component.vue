<script>
export default {
    props: ['show', 'onClose'],
    methods: {
        close: function() {
            this.onClose();
        }
    },
    mounted: function() {
        document.addEventListener("keydown", (e) => {
            if (this.show && e.keyCode == 27) {
                this.onClose();
            }
        });
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
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.v-modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.v-modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    margin-top: 25px;
    overflow-y: auto;
    max-height: 90%;
}

.v-modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.v-modal-body {
    margin: 20px 0;
}

.v-modal-default-button {
    float: right;
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
</style>

<template>
    <transition name="v-modal">
        <div class="v-modal-mask" @click="close" v-show="show">
            <div class="v-modal-container" @click.stop>
                <div class="v-modal-header">
                    <slot name="header"></slot>
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
