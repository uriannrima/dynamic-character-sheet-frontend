<template>
  <div class="featt">
    <div class="black-box rounded">
      <div>
        <label>Feats</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="feats-container"
         v-show="!minimize">
      <feat v-for="(feat, index) in feats"
            :key="index"
            :feat="feat"
            @onSelected="onSelected"></feat>
      <div class="no-content-container"
           v-if="feats.length == 0">
        <label>No feats</label>
      </div>
    </div>
    <feat-modal :show.sync="showModal"
                :referenceList="feats"
                :describe.sync="selected"
                @onAdded="addFeat($event.model)"
                @onRemoved="removeFeat($event.model)"></feat-modal>
  </div>
</template>

<script>
import { ModalContainerMixin } from 'shared/modal';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';
import { Feat, FeatModal } from './';
import { mapState, mapMutations } from 'store/CharacterModule';

export default {
  components: { Feat, FeatModal },
  mixins: [ModalContainerMixin, MinimizableMixin],
  computed: {
    ...mapState(['feats'])
  },
  created() {
    // character.update.mixin requirement.
    this.arrayName = 'feats';
  },
  methods: {
    ...mapMutations(['addFeat', 'removeFeat'])
  }
}
</script>

<style>
.feats-container {
  border: solid 1px black;
}

.no-content-container {
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  font-weight: 75%;
}
</style>
