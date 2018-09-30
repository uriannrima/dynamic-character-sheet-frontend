<template>
  <store-container module="CharacterSheet/Layout"
                   namespaced
                   :map-state="['sections', 'isSectionMenuOpen']">
    <template slot-scope="mappings">
      <fab-menu :open="mappings.state.isSectionMenuOpen"
                :items="mappings.state.sections"
                @click="handleSessionSelection"
                @toggle="toggleSectionMenu">
      </fab-menu>
    </template>
  </store-container>
</template>

<script>
import { mapMutations as layoutMutations } from '../Store/Layout';

export default {
  methods: {
    ...layoutMutations(['setSelectedSection', 'toggleSectionMenu']),
    handleSessionSelection($event) {
      this.setSelectedSection($event.meta.item.value);
      this.toggleSectionMenu();
    }
  }
};
</script>

<style>
</style>
