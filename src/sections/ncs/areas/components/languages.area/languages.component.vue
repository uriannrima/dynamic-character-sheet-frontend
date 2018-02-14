<template>
  <div class="languages-component">
    <div class="black-box">
      <div>
        <label>Languages</label>
        <span class="add-icon glyphicon glyphicon-plus" @click="toggleModal"></span>
      </div>
    </div>
    <div class="languages-container">
      <language-component v-for="(language, index) in character.languages" :key="index" :language="language" @onSelected="onSelected"></language-component>
      <div class="no-content-container" v-if="character.languages.length == 0">
        <label>No languages</label>
      </div>
    </div>
    <language-modal :show.sync="showModal" :referenceList="character.languages" :describe.sync="selected" @onAdded="addToCharacter($event.model)" @onRemoved="removeFromCharacter($event.model)" @onUpdated="updateOnCharacter($event.model)"></language-modal>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { CharacterUpdateMixin, ModalContainerMixin } from 'Shared/modal';
import LanguageComponent from './language.component';
import LanguageModal from './language.modal';

export default {
  mixins: [CharacterMixin, CharacterUpdateMixin, ModalContainerMixin],
  components: { LanguageComponent, LanguageModal },
  created() {
    // character.update.mixin requirement.
    this.arrayName = 'languages';
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
.languages-container {
  border: solid 1px black;
}
</style>
