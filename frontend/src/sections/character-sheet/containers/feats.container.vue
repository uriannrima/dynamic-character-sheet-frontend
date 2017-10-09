<script>
import FeatComponent from '../components/feat.component';
import DcsFeatModal from '../modals/feat.modal.component';

export default {
    props: ['character'],
    components: {
        FeatComponent, DcsFeatModal
    },
    data: function() {
        return {
            showModal: false,
            selected: null,
        }
    },
    methods: {
        openFeatDescription: function(feat) {
            this.selected = feat;
            this.showModal = true;
        }
    }
}
</script>
<template>
    <div>
        <div class="feats-container">
            <div class="feats-header black-box">
                <span class="health-points-abbreviation">Feats</span>
                <span class="add-feat-icon glyphicon glyphicon-plus" @click="showModal = true"></span>
            </div>
            <div class="feats-area">
                <feat-component v-for="(feat, index) in character.feats" :key="index" :feat="feat" @onFeatSelected="openFeatDescription"></feat-component>
            </div>
        </div>
        <dcs-feat-modal :show.sync="showModal" :describe.sync="selected" :reference-list="character.feats" @onAdded="$emit('onFeatAdded', $event)" @onUpdated="$emit('onFeatUpdated', $event)" @onRemoved="$emit('onFeatRemoved', $event)"></dcs-feat-modal>
    </div>
</template>