<template>
  <div class="weapons-grid">
    <div class="saving-conditional-grid">
      <saving-throws-component/>
      <conditional-modifiers-component/>
    </div>
    <div class="base-attack-resistance-grid">
      <base-attack-bonus-component/>
      <spell-resistance-component/>
    </div>
    <grapple-component/>
    <weapons-component/>
  </div>
</template>

<script>
import {
  SavingThrowsComponent,
  ConditionalModifiersComponent,
  BaseAttackBonusComponent,
  SpellResistanceComponent,
  GrappleComponent,
  WeaponsComponent
} from '../components';

export default {
  components: {
    SavingThrowsComponent,
    ConditionalModifiersComponent,
    BaseAttackBonusComponent,
    SpellResistanceComponent,
    GrappleComponent,
    WeaponsComponent
  }
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
</style>
