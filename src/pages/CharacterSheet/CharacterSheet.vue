<template>
  <store-container module="CharacterSheetLayout"
                   namespaced
                   :map-state="[ 'sections', 'isSectionMenuOpen', 'isLoading', 'isSidebarOpen', 'selectedSection', 'selectedAttribute']">
    <template slot-scope="{ state : { sections, isSectionMenuOpen, isLoading, isSidebarOpen, selectedSection, selectedAttribute } }">
      <loading-component :loading="isLoading">
        <sheet-wrapper>
          <sheet>
            <character-sheet-header slot="header">
            </character-sheet-header>
            <component :is="selectedSection"
                       @select="setSelectedAttribute($event); toggleSidebar();">
            </component>
          </sheet>
        </sheet-wrapper>
        <character-sheet-section-menu></character-sheet-section-menu>
        <slideout :open="isSidebarOpen"
                  @update:open="toggleSidebar"
                  panel=".sheet">
          <!-- <portal-target name="character-sheet-slideout-portal">
          </portal-target> -->
          <div>
            Painel:
            <pre>{{selectedAttribute}}</pre>
          </div>
        </slideout>
      </loading-component>
    </template>
  </store-container>
</template>

<script>
import styled from 'vue-styled-components';
import VuexComponent from '@/store/mixins/vuex.component';
import { LoadingComponent, Sheet, FabMenu, Slideout } from '@/components';
import { CharacterSheetHeader } from './CharacterSheetHeader';
import { CharacterSheetSectionMenu } from './CharacterSheetSectionMenu';
import * as Sections from './Sections';

import CharacterModule, {
  mapActions as characterActions
} from './Store/Character';

import LayoutModule, { mapMutations as layoutMutations } from './Store/Layout';

const delay = async duration =>
  new Promise((resolve, reject) => setTimeout(resolve, duration));

const SheetWrapper = styled('div')`
  padding-bottom: 55px;
`;

export default {
  components: {
    CharacterSheetHeader,
    CharacterSheetSectionMenu,
    ...Sections,
    SheetWrapper
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
    ...layoutMutations([
      'toggleLoading',
      'toggleSectionMenu',
      'toggleSidebar',
      'setSelectedSection',
      'setSelectedAttribute'
    ]),
    async loadSheet(characterId) {
      return delay(1500).then(() => {
        if (!characterId) {
          return this.newCharacter();
        } else {
          return this.loadCharacter(characterId);
        }
      });
    }
  }
};
</script>
