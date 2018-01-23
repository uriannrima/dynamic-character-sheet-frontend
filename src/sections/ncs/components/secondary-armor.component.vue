<template>
    <div class="secondary-armor-component">
        <div class="black-box">
            <label>Touch</label>
            <label>Armor Class</label>
        </div>
        <div class="black-box ff-bb">
            <label>Flat-Footed</label>
            <label>Armor Class</label>
        </div>
        <input type="number" class="common-input touch-armor-input" readonly :value="getTouchArmor">
        <input type="number" class="common-input" readonly :value="getFlatFooted">
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
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2px;
        grid-row-gap: 2px;
    }

    @media screen and (min-width: 1024px) {
        .secondary-armor-component {
            grid-template-columns: 25% auto 45% auto;
        }

        .ff-bb {
            grid-row-start: 1;
            grid-column-start: 3;
        }

        .touch-armor-input {
            grid-row-start: 1;
            grid-column-start: 2;
        }
    }
</style>
