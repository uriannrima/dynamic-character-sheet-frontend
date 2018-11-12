<template>
  <resume-cards :list="savingThrows"
                listName="Saving Throws">
    <template slot-scope="{ list: savingThrows }">
      <saving-throw v-for="savingThrow in savingThrows"
                    :key="savingThrow.name"
                    :name="savingThrow.name"
                    :total="savingThrow.total"
                    :key-ability-score="abilityScores[savingThrow.keyAbility]"
                    :modifiers="savingThrow.modifiers"
                    v-on="$listeners">
      </saving-throw>
    </template>
  </resume-cards>
</template>

<script>
import SavingThrow from './SavingThrow';

export default {
  components: { SavingThrow },
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
