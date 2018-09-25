<template>
  <sheet-section>
    <ability-scores :ability-scores="abilityScores"
                    @select="openAbilityScorePanel"></ability-scores>
    <saving-throws :saving-throws="savingThrows"
                   :ability-scores="abilityScores"
                   @select="openSavingThrowPanel"></saving-throws>
    <miscelaneous></miscelaneous>
    <portal :to="portals.abilityScore">
      <ability-score-panel v-if="selectedAbilityScore !== null"
                           :ability-score="selectedAbilityScore"></ability-score-panel>
    </portal>
    <portal :to="portals.savingThrow">
      <saving-throw-panel v-if="selectedSavingThrow !== null"
                          :saving-throw="selectedSavingThrow"
                          :key-ability-score="abilityScores[selectedSavingThrow.keyAbility]">
      </saving-throw-panel>
    </portal>
  </sheet-section>
</template>

<script>
import SheetSection from '@/components/SheetSection';

import { AbilityScores } from './AbilityScores';
import { Miscelaneous } from './Miscelaneous';
import { SavingThrows } from './SavingThrows';

import { mapState } from '@/pages/CharacterSheet/Store/Character';
import { mapMutations as layoutMutations } from '@/pages/CharacterSheet/Store/Layout';
import {
  AbilityScorePanel,
  SavingThrowPanel
} from '@/pages/CharacterSheet/Panels';

import AbilityScoreService from '@services/domain/AbilityScoresService';
import SavingThrowsService from '@services/domain/SavingThrowsService';

export default {
  components: {
    SheetSection,
    AbilityScores,
    Miscelaneous,
    SavingThrows,
    AbilityScorePanel,
    SavingThrowPanel
  },
  data: () => ({
    portals: {
      abilityScore: 'ability-score-panel',
      savingThrow: 'saving-throw-panel'
    },
    selectedAbilityScore: null,
    selectedSavingThrow: null
  }),
  computed: {
    ...mapState(['abilityScores', 'savingThrows'])
  },
  methods: {
    ...layoutMutations(['setPortalName']),
    async openAbilityScorePanel({ abilityScore }) {
      try {
        const score = await AbilityScoreService.getById(abilityScore);
        const characterScore = this.abilityScores[abilityScore];
        characterScore.snippet = score.snippet;
        characterScore.description = score.description;
        this.selectedAbilityScore = characterScore;
        this.setPortalName(this.portals.abilityScore);
        this.$emit('select');
      } catch (error) {
        throw error;
      }
    },
    async openSavingThrowPanel({ savingThrow }) {
      try {
        const save = await SavingThrowsService.getById(savingThrow);
        const characterSave = this.savingThrows[savingThrow];
        characterSave.snippet = save.snippet;
        this.selectedSavingThrow = characterSave;
        this.setPortalName(this.portals.savingThrow);
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
