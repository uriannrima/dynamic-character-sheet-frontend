<template>
  <store-container module="CharacterSheet/Layout"
                   namespaced
                   :map-state="['panelName']">
    <template slot-scope="mappings">
      <div class="character-sheet-panel">
        <component :is="mappings.state.panelName"
                   :selected="getSelectedAttribute"
                   :description="getSelectedAttributeDescription">
        </component>
      </div>
    </template>
  </store-container>
</template>

<script>
import * as Panels from './Panels';
import { mapGetters } from '@/pages/CharacterSheet/Store';

export default {
  components: { ...Panels },
  computed: {
    ...mapGetters(['getSelectedAttribute', 'getSelectedAttributeDescription'])
  }
};
</script>

<style lang="scss" scoped>
.character-sheet-panel {
  flex: 1;
}
</style>
