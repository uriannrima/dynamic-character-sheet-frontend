<template>
  <character-sheet-loading>
    <character-sheet-wrapper class="sheet-wrapper">
      <sheet>
        <character-sheet-header slot="header">
        </character-sheet-header>
        <character-sheet-section>
        </character-sheet-section>
      </sheet>
    </character-sheet-wrapper>
    <character-sheet-section-menu></character-sheet-section-menu>
    <character-sheet-panel panel-selector=".sheet-wrapper"></character-sheet-panel>
  </character-sheet-loading>
</template>

<script>
import VuexComponent from '@/store/mixins/vuex.component';
import { Sheet } from '@/components';
import { CharacterSheetHeader } from './CharacterSheetHeader';
import { CharacterSheetSectionMenu } from './CharacterSheetSectionMenu';
import { CharacterSheetPanel } from './CharacterSheetPanel';
import { CharacterSheetSection } from './CharacterSheetSection';
import { CharacterSheetLoading } from './CharacterSheetLoading';
import { CharacterSheetWrapper } from './CharacterSheetWrapper';

import CharacterModule, {
  mapActions as characterActions
} from './Store/Character';

import LayoutModule, { mapMutations as layoutMutations } from './Store/Layout';

export default {
  components: {
    CharacterSheetHeader,
    CharacterSheetSectionMenu,
    CharacterSheetPanel,
    CharacterSheetSection,
    CharacterSheetLoading,
    CharacterSheetWrapper
  },
  mixins: [
    VuexComponent([
      { name: 'Character', module: CharacterModule },
      { name: 'CharacterSheetLayout', module: LayoutModule }
    ])
  ],
  async beforeRouteEnter(to, from, next) {
    next(async vm => {
      vm.toggleLoading(true);
      await vm.loadSheet(vm.id);
      vm.toggleLoading(false);
    });
  },
  async beforeRouteUpdate(to, from, next) {
    this.toggleLoading(true);
    await this.loadSheet(to.params.id);
    this.toggleLoading(false);
    next();
  },
  props: {
    id: {
      type: String
    }
  },
  methods: {
    ...characterActions(['loadCharacter', 'newCharacter']),
    ...layoutMutations(['toggleLoading']),
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
