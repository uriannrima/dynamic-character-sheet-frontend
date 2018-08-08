<template>
  <loading-component :loading="isLoading">
    <sheet>
      <ability-saves v-show="selectedSection === 'ability & saves'">
      </ability-saves>
      <skills-section v-show="selectedSection === 'skills'"></skills-section>
      <combat v-show="selectedSection === 'combat'"></combat>
      <inventory-section v-show="selectedSection === 'inventory'"></inventory-section>
      <spells-section v-show="selectedSection === 'spells'"></spells-section>
      <feats-section v-show="selectedSection === 'feats'"></feats-section>
      <special-abilities-section v-show="selectedSection === 'special abilities'"></special-abilities-section>
      <languages-section v-show="selectedSection === 'languages'"></languages-section>
      <section-menu :open="isSectionMenuOpen"
                    :sections="sections"
                    @click="toggleSection"
                    @toggle="toggleSectionMenu"></section-menu>
    </sheet>
    <slideout panel=".sheet">
      <div>
        This is some content.
      </div>
    </slideout>
  </loading-component>
</template>

<script>
import VuexComponent from 'shared/mixins/vuex.component';
import { LoadingComponent, Slideout } from 'shared/components';
import { SectionMenu } from './SectionMenu';
import * as Sheet from './Sheet';
import * as Sections from './Sections';

import CharacterModule, { mapActions } from './Store';

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
  mixins: [VuexComponent('Character', CharacterModule)],
  async beforeRouteEnter(to, from, next) {
    next(async vm => {
      vm.isLoading = true;
      await vm.loadSheet(vm.id);
      vm.isLoading = false;
    });
  },
  async beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    await this.loadSheet(to.params.id);
    this.isLoading = false;
    next();
  },
  props: {
    id: {
      type: String
    }
  },
  data: () => ({
    isLoading: false,

    isSectionMenuOpen: false,
    selectedSection: 'ability & saves',
    sections: [
      'ability & saves',
      'skills',
      'combat',
      'inventory',
      'spells',
      'feats',
      'special abilities',
      'languages'
    ]
  }),
  methods: {
    ...mapActions(['loadCharacter', 'newCharacter']),
    async loadSheet(characterId) {
      return delay(1500).then(() => {
        if (!characterId) {
          return this.newCharacter();
        } else {
          return this.loadCharacter(characterId);
        }
      });
    },
    toggleSectionMenu() {
      this.isSectionMenuOpen = !this.isSectionMenuOpen;
    },
    toggleSection({ section }) {
      this.selectedSection = section;
      this.toggleSectionMenu();
    }
  }
};
</script>

<style lang="scss">
.testing-out {
  width: 100%;
  height: 100%;
  background-color: #252121;
  padding: 5px;
}
</style>
