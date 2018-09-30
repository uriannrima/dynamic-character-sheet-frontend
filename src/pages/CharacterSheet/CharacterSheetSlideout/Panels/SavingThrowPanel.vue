<template>
  <base-panel :title="selected.name"
              :sub-title="selected.total + selected.keyAbilityScore.modifier"
              :snippet="selected.snippet"
              :description="selected.description"
              manageable
              :base="selected.base"
              :ability-modifier="selected.keyAbilityScore.modifier"
              :modifiers="selected.modifiers"
              v-on="$listeners">
  </base-panel>
</template>

<script>
import BasePanel from './BasePanel.vue';
export default {
  components: { BasePanel },
  props: {
    selected: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
