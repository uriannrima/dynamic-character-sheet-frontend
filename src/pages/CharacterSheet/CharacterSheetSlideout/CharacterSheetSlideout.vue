<template>
  <store-container module="CharacterSheet/Layout"
                   namespaced
                   :map-state="[ 'isSidebarOpen']"
                   map-mutations="toggleSidebar">
    <template slot-scope="mappings">
      <slideout :open="mappings.state.isSidebarOpen"
                @update:open="mappings.mutations.toggleSidebar"
                :panel="slideoutSelector">
        <character-sheet-panel>
        </character-sheet-panel>
      </slideout>
    </template>
  </store-container>
</template>

<script>
import CharacterSheetPanel from './CharacterSheetPanel.vue';

export default {
  components: { CharacterSheetPanel },
  props: {
    slideoutSelector: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>
