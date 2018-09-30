<template>
  <store-container module="CharacterSheet/Character"
                   namespaced
                   :map-state="['initiativeModifiers']"
                   :map-getters="['getTotalInitiative', 'getInitiativeKeyScore']">
    <template slot-scope="mappings">
      <base-panel title="Initiative"
                  :sub-title="mappings.getters.getTotalInitiative"
                  manageable
                  :ability-modifier="mappings.getters.getInitiativeKeyScore.modifier"
                  :modifiers="mappings.state.initiativeModifiers"
                  v-on="$listeners">
      </base-panel>
    </template>
  </store-container>
</template>

<script>
import BasePanel from './BasePanel.vue';
export default {
  components: { BasePanel },
  props: {
    selected: Object
  }
};
</script>

<style>
</style>
