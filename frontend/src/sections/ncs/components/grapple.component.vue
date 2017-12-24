<template>
  <div class="grapple-component">
    <div class="black-box grapple-box">
      <label>Grapple</label>
      <label>Modifier</label>
    </div>
    <input type="text" class="common-input bab-input" readonly :value="getGrappleTotal">
    <input type="text" class="common-input bab-input" readonly :value="getBaseAttackBonus">
    <input type="number" class="common-input" readonly :value="getKeyAbility.getTempModifier()">
    <input type="number" class="common-input" readonly :value="character.size.grappleBonus">
    <input type="number" class="common-input" v-model.number="character.grapple.miscModifier">
    <span class="total-label" :value="getGrappleTotal">Total</span>
    <span>Base Attack<br>Bonus</span>
    <span>Strength<br>Modifier</span>
    <span>Size<br>Modifier</span>
    <span>Misc<br>Modifier</span>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin],
  computed: {
    getKeyAbility() {
      return this.character.abilityScores.find(ability => ability.name === 'strength');
    },
    getBaseAttackBonus() {
      return this.character.baseAttackBonus.join('/');
    },
    getGrappleTotal() {
      return this.character.baseAttackBonus.map(bab => {
        return bab + this.getKeyAbility.getTempModifier() + this.character.size.grappleBonus + this.character.grapple.miscModifier;
      }).join('/');
    }
  }
}
</script>

<style>
.grapple-component {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto 25%;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  align-items: center;
  justify-items: center;
}

.grapple-box {
  grid-column-end: span 5;
}

.grapple-component span {
  font-size: 50%;
  line-height: 8px;
  text-transform: uppercase;
  text-align: center;
}
</style>
