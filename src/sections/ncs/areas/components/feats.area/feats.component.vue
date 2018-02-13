<template>
  <div class="feats-component">
    <div class="black-box">
      <div>
        <label>Feats</label>
        <span class="add-icon glyphicon glyphicon-plus" @click="toggleModal"></span>
      </div>
    </div>
    <div class="feats-container">
      <feat-component v-for="(feat, index) in character.feats" :key="index" :feat="feat" @onSelected="onSelected"></feat-component>
      <div class="no-content-container" v-if="character.feats.length == 0">
        <label>No feats</label>
      </div>
    </div>
    <feat-modal :show.sync="showModal" :referenceList="character.feats" :describe.sync="selected" @onAdded="addToCharacter($event.model)" @onRemoved="removeFromCharacter($event.model)" @onUpdated="updateOnCharacter($event.model)"></feat-modal>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { CharacterUpdateMixin, ModalContainerMixin } from 'Shared/modal';
import FeatComponent from './feat.component';
import FeatModal from './feat.modal';

export default {
  mixins: [CharacterMixin, CharacterUpdateMixin, ModalContainerMixin],
  components: { FeatComponent, FeatModal },
  created() {
    // character.update.mixin requirement.
    this.arrayName = 'feats';
  },
  data() {
    return {
      showModal: false,
      selected: null
    }
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
