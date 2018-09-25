<template>
  <loading-component :loading="isLoading">
    <sheet>
      <ability-saves v-show="selectedSection === 'ability & saves'"
                     @select="toggleSidebar">
      </ability-saves>
      <skills-section v-show="selectedSection === 'skills'"></skills-section>
      <combat v-show="selectedSection === 'combat'"></combat>
      <inventory-section v-show="selectedSection === 'inventory'"></inventory-section>
      <spells-section v-show="selectedSection === 'spells'"></spells-section>
      <feats-section v-show="selectedSection === 'feats'"></feats-section>
      <special-abilities-section v-show="selectedSection === 'special abilities'"></special-abilities-section>
      <languages-section v-show="selectedSection === 'languages'"></languages-section>
    </sheet>
    <section-menu :open="isSectionMenuOpen"
                  :sections="sections"
                  @click="setSelectedSection($event.section); toggleSectionMenu();"
                  @toggle="toggleSectionMenu"></section-menu>
    <slideout :open="isSidebarOpen"
              @update:open="toggleSidebar"
              panel=".sheet">
      <portal-target v-if="portalName"
                     :name="portalName"></portal-target>
    </slideout>
  </loading-component>
</template>

<script>
import VuexComponent from '@/mixins/vuex.component';
import { LoadingComponent, Slideout } from '@/components';
import { SectionMenu } from './SectionMenu';
import * as Sheet from './Sheet';
import * as Sections from './Sections';

import CharacterModule, {
  mapActions as characterActions
} from './Store/Character';

import LayoutModule, {
  mapState as layoutState,
  mapMutations as layoutMutations
} from './Store/Layout';

const delay = async duration =>
  new Promise((resolve, reject) => setTimeout(resolve, duration));

export default {
  components: {
    LoadingComponent,
    SectionMenu,
    ...Sheet,
    ...Sections,
    Slideout
  },
  mixins: [
    VuexComponent([
      {
        name: 'Character',
        module: CharacterModule
      },
      {
        name: 'CharacterSheetLayout',
        module: LayoutModule
      }
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
  computed: {
    ...layoutState([
      'isLoading',
      'isSectionMenuOpen',
      'isSidebarOpen',
      'sections',
      'selectedSection',
      'portalName'
    ])
  },
  methods: {
    ...characterActions(['loadCharacter', 'newCharacter']),
    ...layoutMutations([
      'toggleLoading',
      'toggleSectionMenu',
      'toggleSidebar',
      'setPortalName',
      'setSelectedSection'
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
