<template>
  <resume-cards :list="abilityScores"
                listName="Ability Scores">
    <template slot-scope="{ list: abilityScores }">
      <ability-score v-for="abilityScore in abilityScores"
                     :key="abilityScore.name"
                     :name="abilityScore.name"
                     :total="abilityScore.total"
                     :modifier="abilityScore.modifier"
                     :modifiers="abilityScore.modifiers"
                     v-on="$listeners">
      </ability-score>
    </template>
  </resume-cards>
</template>

<script>
import AbilityScore from './AbilityScore';

export default {
  components: { AbilityScore },
  props: {
    abilityScores: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
