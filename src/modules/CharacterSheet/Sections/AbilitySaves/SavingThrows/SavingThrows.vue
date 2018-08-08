<template>
  <resume-cards :list="savingThrows"
                listName="Saving Throws">
    <template slot-scope="{ list: savingThrows }">
      <saving-throw v-for="savingThrow in savingThrows"
                    :key="savingThrow.name"
                    :saving-throw="savingThrow"
                    :keyAbilityScore="abilityScores[savingThrow.keyAbility]">
      </saving-throw>
    </template>
  </resume-cards>
</template>

<script>
import { ResumeCards } from 'shared/components/ResumeCards';
import SavingThrow from './SavingThrow';

export default {
  components: { ResumeCards, SavingThrow },
  props: {
    savingThrows: {
      type: Object,
      required: true
    },
    abilityScores: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
