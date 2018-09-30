<template>
  <store-container module="CharacterSheet/Layout"
                   namespaced
                   :map-state="['panelName', 'selectedAttribute']"
                   :map-actions="['addModifier', 'removeModifier']">
    <template slot-scope="mappings">
      <div class="character-sheet-panel">
        <component :is="mappings.state.panelName"
                   :selected="mappings.state.selectedAttribute"
                   @add-modifier="mappings.actions.addModifier"
                   @remove-modifier="mappings.actions.removeModifier">
        </component>
      </div>
    </template>
  </store-container>
</template>

<script>
import * as Panels from './Panels';

export default {
  components: { ...Panels }
};
</script>

<style lang="scss" scoped>
.character-sheet-panel {
  flex: 1;
}
</style>
