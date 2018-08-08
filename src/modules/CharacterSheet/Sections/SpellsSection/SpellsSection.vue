<template>
  <sheet-section>
    <spells :spells="spells"
            :classes="getClasses"
            :ability-scores="abilityScores"
            :base-attack-bonus="baseAttackBonus[0]">
    </spells>
  </sheet-section>
</template>

<script>
import SheetSection from 'shared/components/SheetSection';

import { Spells } from './Spells';

import { mapState } from 'modules/CharacterSheet/Store';

export default {
  components: { SheetSection, Spells },
  computed: {
    ...mapState(['spells', 'classes', 'abilityScores', 'baseAttackBonus']),
    getClasses() {
      return this.classes.groupBy(classe => classe.name);
    }
  }
};
</script>

<style>
</style>
