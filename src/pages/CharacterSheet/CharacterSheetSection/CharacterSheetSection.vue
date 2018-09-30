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
import { mapActions as layoutActions } from '../Store/Layout';

export default {
  components: {
    ...Sections
  },
  methods: {
    ...layoutActions(['setSelectedAttribute']),
    handleSelection({ meta }) {
      this.setSelectedAttribute(meta);
    }
  }
};
</script>

<style>
</style>
