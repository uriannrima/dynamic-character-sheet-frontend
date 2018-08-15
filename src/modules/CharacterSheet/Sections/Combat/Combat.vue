<template>
  <sheet-section>
    <offensive :base-attack-bonus="baseAttackBonus[0]"
               :grapple="getGrappleTotal"></offensive>
    <defensive :armor-class="getTotalArmor"
               :touch="getTouchArmor"
               :flat-footed="getFlatFooted"></defensive>
    <special-attributes :spell-resistance="spellResistance"
                        :damage-reduction="damageReduction"></special-attributes>
    <attacks :attacks="attacks"
             :ability-scores="abilityScores"></attacks>
  </sheet-section>
</template>

<script>
import SheetSection from '@shared/components/SheetSection';

import Offensive from './Offensive';
import Defensive from './Defensive';
import SpecialAttributes from './SpecialAttributes';
import { Attacks } from './Attacks';

import { mapState, mapGetters } from '@modules/CharacterSheet/Store/Character';

export default {
  components: {
    SheetSection,
    Offensive,
    Defensive,
    SpecialAttributes,
    Attacks
  },
  computed: {
    ...mapState([
      'baseAttackBonus',
      'spellResistance',
      'damageReduction',
      'attacks',
      'abilityScores'
    ]),
    ...mapGetters([
      'getGrappleTotal',
      'getTotalArmor',
      'getTouchArmor',
      'getFlatFooted'
    ])
  }
};
</script>

<style>
</style>
