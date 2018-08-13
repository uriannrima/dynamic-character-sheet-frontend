<template>
  <sheet-section>
    <ability-scores :ability-scores="abilityScores"
                    @select="openAbilityScorePanel"></ability-scores>
    <saving-throws :saving-throws="savingThrows"
                   :ability-scores="abilityScores"></saving-throws>
    <miscelaneous></miscelaneous>
    <portal to="slideout-portal">
      <ability-score-panel v-if="selectedAbilityScore !== null"
                           :ability-score="selectedAbilityScore"></ability-score-panel>
    </portal>
  </sheet-section>
</template>

<script>
import SheetSection from 'shared/components/SheetSection';

import { AbilityScores } from './AbilityScores';
import { Miscelaneous } from './Miscelaneous';
import { SavingThrows } from './SavingThrows';

import { mapState } from 'modules/CharacterSheet/Store';
import { AbilityScorePanel } from 'modules/CharacterSheet/Panels';

import AbilityScoreService from 'services/ability-scores.service';

export default {
  components: {
    SheetSection,
    AbilityScores,
    Miscelaneous,
    SavingThrows,
    AbilityScorePanel
  },
  data: () => ({
    selectedAbilityScore: null
  }),
  computed: {
    ...mapState(['abilityScores', 'savingThrows'])
  },
  methods: {
    async openAbilityScorePanel({ abilityScore }) {
      try {
        const score = await AbilityScoreService.getById(abilityScore);
        const characterScore = this.abilityScores[abilityScore];
        characterScore.snippet = score.snippet;
        characterScore.description = score.description;
        this.selectedAbilityScore = characterScore;
        this.$emit('select');
      } catch (error) {
        throw error;
      }
    }
  }
};
</script>

<style>
</style>
