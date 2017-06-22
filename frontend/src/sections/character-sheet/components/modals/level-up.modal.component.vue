<script>
import DcsModal from 'Shared/modal.component';

export default {
    props: ['show'],
    components: { DcsModal },
    methods: {
        close: function () {
            // Clear level up data.
            this.$emit('update:show', false);
        }
    }
}
</script>


<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            Level up
        </div>
        <div slot="body">
            You will write here.
        </div>
        <div slot="footer">
            Buttons here.
        </div>
    </dcs-modal>
</template>
