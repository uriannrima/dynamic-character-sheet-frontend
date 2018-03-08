<template>
  <div class="featt">
    <div class="black-box rounded">
      <div>
        <label>Feats</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="feats-container" v-show="!minimize">
      <feat v-for="(feat, index) in character.feats"
            :key="index"
            :feat="feat"
            @onSelected="onSelected"></feat>
      <div class="no-content-container"
           v-if="character.feats.length == 0">
        <label>No feats</label>
      </div>
    </div>
    <feat-modal :show.sync="showModal"
                :referenceList="character.feats"
                :describe.sync="selected"
                @onAdded="addToCharacter($event.model)"
                @onRemoved="removeFromCharacter($event.model)"
                @onUpdated="updateOnCharacter($event.model)"></feat-modal>
  </div>
</template>

<script>
import CharacterMixin from 'store/mixins/character.mixin';
import { CharacterUpdateMixin, ModalContainerMixin } from 'shared/modal';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';
import { Feat, FeatModal } from './';

export default {
  components: { Feat, FeatModal },
  mixins: [CharacterMixin, CharacterUpdateMixin, ModalContainerMixin, MinimizableMixin],
  created() {
    // character.update.mixin requirement.
    this.arrayName = 'feats';
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
