<template>
  <store-container module="CharacterSheet/Layout"
                   namespaced
                   :map-state="['selectedSection']">
    <template slot-scope="mappings">
      <component :is="mappings.state.selectedSection"
                 @select="handleSelection">
      </component>
    </template>
  </store-container>
</template>

<script>
import * as Sections from '../Sections';
import { mapMutations as layoutMutations } from '../Store/Layout';

export default {
  components: {
    ...Sections
  },
  methods: {
    ...layoutMutations(['setSelectedAttribute', 'toggleSidebar']),
    handleSelection($event) {
      this.setSelectedAttribute($event);
      this.toggleSidebar();
    }
  }
};
</script>

<style>
</style>
