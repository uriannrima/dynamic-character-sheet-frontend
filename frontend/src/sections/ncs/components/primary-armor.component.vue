<template>
    <div class="primary-armor-component">
        <div class="black-box ac-bb">
            <label>AC</label>
            <label>Armor Class</label>
        </div>
        <input type="number" class="common-input ac-bb" readonly :value="getTotalArmor">
        <span class="base-armor-label">= 10 +</span>
        <input type="number" class="common-input" v-model.number="armorClass.armorBonus">
        <input type="number" class="common-input" v-model.number="armorClass.shieldBonus">
        <input type="number" class="common-input" readonly :value="getAbility.getTempModifier()">
        <input type="number" class="common-input" v-model.number="armorClass.sizeModifier">
        <input type="number" class="common-input" v-model.number="armorClass.naturalArmor">
        <input type="number" class="common-input" v-model.number="armorClass.deflectionModifier">
        <input type="number" class="common-input" v-model.number="armorClass.miscModifier">
        <div class="black-box damage-reduction-bb">
            <label>Damage Reduction</label>
        </div>
        <input type="text" class="damage-reduction-bb common-input speed-input" v-model="damageReduction">
    </div>
</template>

<script>
import CharacterStore from 'Store/character.store';

export default {
    data() {
        return {
            armorClass: CharacterStore.Instance.character.armorClass,
            damageReduction: CharacterStore.Instance.character.damageReduction
        }
    },
    computed: {
        getTotalArmor() {
            return this.armorClass.base +
                this.armorClass.armorBonus +
                this.armorClass.shieldBonus +
                this.getAbility.getTempModifier() +
                this.armorClass.sizeModifier +
                this.armorClass.naturalArmor +
                this.armorClass.deflectionModifier +
                this.armorClass.miscModifier;
        },
        getAbility() {
            return CharacterStore.Instance.character.abilityScores.find(abilityScore => {
                return abilityScore.name === 'dexterity';
            });
        }
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

.ac-bb {
  grid-column-end: 8 span;
}

.damage-reduction-bb {
  grid-column-end: 4 span;
}
</style>