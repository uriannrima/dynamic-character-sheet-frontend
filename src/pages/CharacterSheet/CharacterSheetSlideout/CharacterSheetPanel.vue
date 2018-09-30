<template>
  <store-container module="CharacterSheet/Layout"
                   namespaced
                   :map-state="['panelName', 'selectedAttribute']">
    <template slot-scope="mappings">
      <div class="character-sheet-panel">
        <component :is="mappings.state.panelName"
                   :selected="mappings.state.selectedAttribute">
        </component>
      </div>
    </template>
  </store-container>
</template>

<script>
import AbilityScorePanel from './Panels/AbilityScorePanel';
import SavingThrowPanel from './Panels/SavingThrowPanel';

export default {
  components: { AbilityScorePanel, SavingThrowPanel }
};
</script>

<style lang="scss" scoped>
.character-sheet-panel {
  flex: 1;
}
</style>
