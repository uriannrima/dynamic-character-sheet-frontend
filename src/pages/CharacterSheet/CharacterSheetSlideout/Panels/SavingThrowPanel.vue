<template>
  <base-panel :title="selected.name"
              :sub-title="selected.total + getKeyAbilityModifier"
              :snippet="selected.snippet"
              :description="selected.description"
              manageable
              :base="selected.base"
              :ability-modifier="getKeyAbilityModifier"
              :modifiers="selected.modifiers"
              v-on="$listeners">
  </base-panel>
</template>

<script>
import BasePanel from './BasePanel.vue';
import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { BasePanel },
  props: {
    selected: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['abilityScores']),
    getKeyAbilityModifier() {
      return this.abilityScores[this.selected.keyAbility].modifier;
    }
  }
};
</script>

<style>
</style>
