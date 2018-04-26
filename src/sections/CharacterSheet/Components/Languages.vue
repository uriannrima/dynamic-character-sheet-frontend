<template>
  <div class="languages-component">
    <div class="black-box rounded">
      <div>
        <label>Languages</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="languages-container"
         v-show="!minimize">
      <language v-for="(language, index) in languages"
                :key="index"
                :language="language"
                @onSelected="onSelected"></language>
      <div class="no-content-container"
           v-if="languages.length == 0">
        <label>No languages</label>
      </div>
    </div>
    <language-modal :show.sync="showModal"
                    :referenceList="languages"
                    :describe.sync="selected"
                    @onAdded="addLanguage($event.model)"
                    @onRemoved="removeLanguage($event.model)"></language-modal>
  </div>
</template>

<script>
import { ModalContainerMixin } from 'shared/modal';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';
import { Language, LanguageModal } from '../Components';
import { mapState, mapMutations } from '../Store';

export default {
  components: { Language, LanguageModal },
  mixins: [ModalContainerMixin, MinimizableMixin],
  computed: {
    ...mapState(['languages'])
  },
  created() {
    // update.mixin requirement.
    this.arrayName = 'languages';
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
