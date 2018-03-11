<template>
  <div class="primary-armor-component">
    <div class="black-box ac-bb">
      <label>AC</label>
      <label>Armor Class</label>
    </div>
    <input type="number"
           class="common-input ac-bb"
           readonly
           :value="getTotalArmor">
    <span class="base-armor-label">= 10 +</span>
    <input type="number"
           class="common-input"
           readonly
           :value="gear.armor.acBonus">
    <input type="number"
           class="common-input"
           readonly
           :value="gear.shield.acBonus">
    <input type="number"
           class="common-input"
           readonly
           :value="keyScoreModifier">
    <input type="number"
           class="common-input"
           readonly
           :value="size.modifier">
    <input type="number"
           class="common-input"
           :value="armorClass.naturalArmor"
           @change="updateArmorClass({ naturalArmor: $event.target.value * 1 })">
    <input type="number"
           class="common-input"
           readonly
           :value="getDeflectionBonus">
    <input type="number"
           class="common-input"
           :value="armorClass.miscModifier"
           @change="updateArmorClass({ miscModifier: $event.target.value * 1 })">
    <label>&nbsp;</label>
    <label class="h-md-down total-label">Total</label>
    <label class="h-md-down">&nbsp;</label>
    <label>Armor<br>Bonus</label>
    <label>Shield<br>Bonus</label>
    <label>{{ keyScoreName.substring(0, 3) }}<br>Modifier</label>
    <label>Size<br>Modifier</label>
    <label>Natural<br>Armor</label>
    <label>Deflection<br>Modifier</label>
    <label>Misc<br>Modifier</label>
    <div class="h-lg-up black-box damage-reduction-bb">
      <label>Damage Reduction</label>
    </div>
    <input type="text"
           class="damage-reduction-bb common-input speed-input"
           :value="damageReduction"
           @change="updateDamageReduction({ damageReduction: $event.target.value })">
    <label class="h-md-down">Damage<br>Reduction</label>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'store/CharacterModule';

export default {
  props: ['keyScoreName', 'keyScoreModifier'],
  computed: {
    ...mapState(['armorClass', 'size', 'damageReduction', 'gear']),
    ...mapGetters(['getTotalArmor', 'getDeflectionBonus'])
  },
  methods: {
    ...mapActions(['updateArmorClass', 'updateDamageReduction'])
  }
}
</script>

<style>
.primary-armor-component {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  align-items: center;
  grid-row-gap: 2px;
  grid-column-gap: 2px;
}

.primary-armor-component label {
  font-size: 50%;
  text-transform: uppercase;
  text-align: center;
}

.ac-bb {
  grid-column-end: 8 span;
}

.damage-reduction-bb {
  grid-column-end: 4 span;
}

.base-armor-label {
  font-weight: bold;
}

@media screen and (min-width: 1024px) {
  .primary-armor-component {
    grid-template-columns: 10.6% 4.8% repeat(8, 1fr) 13%;
    grid-row-gap: initial;
    grid-column-gap: 9px;
  }

  .base-armor-label {
    font-size: 140%;
  }

  .ac-bb {
    grid-column-end: 1 span;
  }

  .damage-reduction-bb {
    grid-column-end: 1 span;
    grid-row-start: 1;
    grid-column-start: 11;
  }
}
</style>
