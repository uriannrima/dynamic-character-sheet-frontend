<template>
  <div class="languages-component">
    <div class="black-box rounded">
      <div>
        <label>Languages</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="languages-container" v-show="!minimize">
      <language v-for="(language, index) in character.languages"
                :key="index"
                :language="language"
                @onSelected="onSelected"></language>
      <div class="no-content-container"
           v-if="character.languages.length == 0">
        <label>No languages</label>
      </div>
    </div>
    <language-modal :show.sync="showModal"
                    :referenceList="character.languages"
                    :describe.sync="selected"
                    @onAdded="addToCharacter($event.model)"
                    @onRemoved="removeFromCharacter($event.model)"
                    @onUpdated="updateOnCharacter($event.model)"></language-modal>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { CharacterUpdateMixin, ModalContainerMixin } from 'Shared/modal';
import MinimizableMixin from 'Shared/mixins/states/minimizable.mixin';
import { Language, LanguageModal } from './';

export default {
  mixins: [CharacterMixin, CharacterUpdateMixin, ModalContainerMixin, MinimizableMixin],
  components: { Language, LanguageModal },
  created() {
    // character.update.mixin requirement.
    this.arrayName = 'languages';
  }
}
</script>

<style>
.languages-container {
  border: solid 1px black;
}
</style>
