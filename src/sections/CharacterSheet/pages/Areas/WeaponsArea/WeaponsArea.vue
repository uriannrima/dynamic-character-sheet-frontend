<template>
  <div class="weapons-grid">
    <div class="saving-conditional-grid">
      <saving-throws></saving-throws>
      <conditional-modifiers></conditional-modifiers>
    </div>
    <div class="base-attack-resistance-grid">
      <base-attack-bonus></base-attack-bonus>
      <spell-resistance></spell-resistance>
    </div>
    <grapple :keyAbility="getKeyAbility('strength')"></grapple>
    <weapons></weapons>
  </div>
</template>

<script>
import { SavingThrows, ConditionalModifiers, BaseAttackBonus, SpellResistance, Grapple, Weapons } from './';

import KeyAbilityMixin from 'Shared/mixins/methods/key.ability.mixin';

export default {
  mixins: [KeyAbilityMixin],
  components: { SavingThrows, ConditionalModifiers, BaseAttackBonus, SpellResistance, Grapple, Weapons }
}
</script>

<style>
.weapons-grid {
  display: grid;
  grid-template-rows: 17% 5% 5% 71%;
  grid-row-gap: 5px;
}

.saving-conditional-grid {
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
  .saving-conditional-grid {
    grid-template-columns: 75% auto;
    grid-column-gap: 2px;
    grid-template-rows: 1fr;
  }

  .base-attack-resistance-grid {
    grid-template-columns: 65% auto;
  }
}
</style>
