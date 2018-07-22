<template>
  <div class="languages-component">
    <div class="black-box rounded">
      <div>
        <label>Languages</label>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="languages-container">
      <language v-for="(language, index) in languages"
                :key="index"
                :language="language"
                @selected="onSelected"></language>
      <div class="no-content-container"
           v-if="languages.length == 0">
        <label>No languages</label>
      </div>
    </div>
    <language-modal :show.sync="showModal"
                    :referenceList="languages"
                    :describe.sync="selected"
                    @added="addLanguage($event.model)"
                    @removed="removeLanguage($event.model)"></language-modal>
  </div>
</template>

<script>
import { ModalContainerMixin } from 'shared/modal'
import { Language, LanguageModal } from '../Components'
import { mapState, mapMutations } from '../Store'

export default {
  components: { Language, LanguageModal },
  mixins: [ModalContainerMixin],
  computed: {
    ...mapState(['languages'])
  },
  created () {
    // update.mixin requirement.
    this.arrayName = 'languages'
  },
  methods: {
    ...mapMutations(['addLanguage', 'removeLanguage'])
  }
}
</script>

<style>
.languages-container {
  border: solid 1px black;
}
</style>
