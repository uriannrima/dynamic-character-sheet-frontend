<template>
  <div class="featt">
    <div class="black-box rounded">
      <div>
        <label>Feats</label>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="feats-container">
      <feat v-for="(feat, index) in feats"
            :key="index"
            :feat="feat"
            @selected="onSelected"></feat>
      <div class="no-content-container"
           v-if="feats.length == 0">
        <label>No feats</label>
      </div>
    </div>
    <feat-modal :show.sync="showModal"
                :referenceList="feats"
                :describe.sync="selected"
                @added="addFeat($event.model)"
                @removed="removeFeat($event.model)"></feat-modal>
  </div>
</template>

<script>
import { ModalContainerMixin } from 'shared/modal'
import { Feat, FeatModal } from '../Components'
import { mapState, mapMutations } from '../Store'

export default {
  components: { Feat, FeatModal },
  mixins: [ModalContainerMixin],
  computed: {
    ...mapState(['feats'])
  },
  created () {
    // character.update.mixin requirement.
    this.arrayName = 'feats'
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
