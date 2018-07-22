<template>
  <div class="attacks-area attack-grid">
    <div class="saving-condition-grid">
      <saving-throws></saving-throws>
      <condition-modifiers :conditionModifiers="conditionModifiers"
                           @onUpdateConditionModifiers="updateConditionModifiers"></condition-modifiers>
    </div>
    <div class="base-attack-resistance-grid">
      <base-attack-bonus :baseAttackBonus="getBaseAttackBonus"
                         @onUpdateBaseAttackBonus="updateBaseAttackBonus"></base-attack-bonus>
      <spell-resistance :spellResistance="spellResistance"
                        @onUpdateSpellResistance="updateSpellResistance"></spell-resistance>
    </div>
    <grapple :key-score-name="getGrappleKeyScore.name"
             :key-score-modifier="getGrappleKeyScore.tempModifier"
             :size-bonus="size.grappleBonus"
             :base-attack-bonus="getBaseAttackBonus"
             :grapple-modifier="grappleModifier"
             :grapple-total="getGrappleTotal"
             @onUpdateGrapple="updateGrapple"></grapple>
    <attacks></attacks>
  </div>
</template>

<script>
import { SavingThrows, ConditionModifiers, BaseAttackBonus, SpellResistance, Grapple, Attacks } from '../Components'
import { mapState, mapGetters, mapActions } from '../Store'

export default {
  components: { SavingThrows, ConditionModifiers, BaseAttackBonus, SpellResistance, Grapple, Attacks },
  computed: {
    ...mapState(['keyAbilityScores', 'conditionModifiers', 'spellResistance', 'size', 'grappleModifier']),
    ...mapGetters(['getAbilityScore', 'getBaseAttackBonus', 'getGrappleTotal', 'getGrappleKeyScore'])
  },
  methods: {
    ...mapActions(['updateConditionModifiers', 'updateBaseAttackBonus', 'updateSpellResistance', 'updateGrapple'])
  }
}
</script>

<style>
.attack-grid {
  display: grid;
  grid-template-rows: 12% 3% 5% auto;
  grid-row-gap: 5px;
}

.saving-condition-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 5px;
}

.base-attack-resistance-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2px;
}

@media screen and (min-width: 1024px) {
  .saving-condition-grid {
    grid-template-columns: 75% auto;
    grid-column-gap: 5px;
  }

  .base-attack-resistance-grid {
    grid-template-columns: 65% auto;
    grid-column-gap: 10px;
  }
}
</style>
