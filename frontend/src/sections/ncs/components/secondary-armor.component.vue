<template>
    <div class="secondary-armor-component">
        <div class="touch-armor-class">
            <div class="black-box">
                <label>Touch</label>
                <label>Armor Class</label>
            </div>
            <input type="number" class="common-input" readonly :value="getTouchArmor">
        </div>
        <div class="flat-armor-class">
            <div class="black-box">
                <label>Flat-Footed</label>
                <label>Armor Class</label>
            </div>
            <input type="number" class="common-input" readonly :value="getFlatFooted">
        </div>
    </div>
</template>

<script>
import CharacterStore from 'Store/character.store';

export default {
    data() {
        return {
            armorClass: CharacterStore.Instance.character.armorClass
        }
    },
    computed: {
        getAbility() {
            return CharacterStore.Instance.character.abilityScores.find(abilityScore => {
                return abilityScore.name === 'dexterity';
            });
        },
        getTouchArmor() {
            return this.armorClass.base +
                this.getAbility.getTempModifier() +
                this.armorClass.sizeModifier +
                this.armorClass.miscModifier;
        },
        getFlatFooted() {
            return this.armorClass.base +
                this.armorClass.armorBonus +
                this.armorClass.shieldBonus +
                this.armorClass.sizeModifier +
                this.armorClass.naturalArmor +
                this.armorClass.deflectionModifier +
                this.armorClass.miscModifier;
        }
    }
}
</script>

<style>
.secondary-armor-component {
  display: grid;
  grid-template-columns: 40% 1fr;
}

.touch-armor-class {
  display: grid;
  grid-template-columns: 62% 1fr;
  align-items: center;
  justify-items: center;
}

.flat-armor-class {
  display: grid;
  grid-template-columns: 67% 1fr;
  align-items: center;
  justify-items: center;
}
</style>
