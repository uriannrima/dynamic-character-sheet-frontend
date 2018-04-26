<template>
  <div class="attack-grid">
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
    <grapple :keyScoreName="keyScore.name"
             :keyScoreModifier="getTempModifier(keyScore)"
             :sizeBonus="size.grappleBonus"
             :baseAttackBonus="getBaseAttackBonus"
             :miscModifier="grapple.miscModifier"
             :grappleTotal="getGrappleTotal"
             @onUpdateGrapple="updateGrapple"></grapple>
    <attacks></attacks>
  </div>
</template>

<script>
import { SavingThrows, ConditionModifiers, BaseAttackBonus, SpellResistance, Grapple, Attacks } from '../Components';
import { mapState, mapGetters, mapActions } from '../Store';

export default {
  components: { SavingThrows, ConditionModifiers, BaseAttackBonus, SpellResistance, Grapple, Attacks },
  computed: {
    ...mapState(['keyAbilityScores', 'conditionModifiers', 'spellResistance', 'size', 'grapple']),
    ...mapGetters(['getAbilityScore', 'getTempModifier', 'getBaseAttackBonus', 'getGrappleTotal']),
    keyScore() {
      return this.getAbilityScore(this.keyAbilityScores.grapple);
    }
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
