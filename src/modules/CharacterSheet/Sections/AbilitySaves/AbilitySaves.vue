<template>
  <sheet-section>
    <ability-scores :ability-scores="abilityScores"></ability-scores>
    <saving-throws :saving-throws="savingThrows"
                   :ability-scores="abilityScores"></saving-throws>
    <miscelaneous></miscelaneous>
  </sheet-section>
</template>

<script>
import SheetSection from 'shared/components/SheetSection';

import { AbilityScores } from './AbilityScores';
import { Miscelaneous } from './Miscelaneous';
import { SavingThrows } from './SavingThrows';

import { mapState } from 'modules/CharacterSheet/Store';

export default {
  components: { SheetSection, AbilityScores, Miscelaneous, SavingThrows },
  computed: {
    ...mapState(['abilityScores', 'savingThrows'])
  }
};
</script>

<style>
</style>
