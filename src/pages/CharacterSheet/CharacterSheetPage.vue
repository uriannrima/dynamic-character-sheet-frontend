<template>
  <character-sheet></character-sheet>
</template>

<script>
import VuexComponent from '@/store/mixins/vuex.component';
import CharacterSheet from './CharacterSheet.vue';

import CharacterSheetModule, {
  mapActions as characterSheetActions
} from './Store';

export default {
  components: {
    CharacterSheet
  },
  mixins: [
    VuexComponent([{ name: 'CharacterSheet', module: CharacterSheetModule }])
  ],
  async beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.loadSheet(vm.id);
    });
  },
  async beforeRouteUpdate(to, from, next) {
    await this.loadSheet(to.params.id);
    next();
  },
  props: { id: String },
  methods: {
    ...characterSheetActions(['loadCharacter', 'newCharacter']),
    async loadSheet(characterId) {
      if (!characterId) {
        return this.newCharacter();
      } else {
        return this.loadCharacter(characterId);
      }
    }
  }
};
</script>
