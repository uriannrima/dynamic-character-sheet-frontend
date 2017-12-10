<template>
    <div class="initiative-component">
        <div class="black-box">
            <label>Initiative</label>
            <label>Modifier</label>
        </div>
        <div class="initiative-grid">
            <input type="number" class="common-input" readonly :value="getTotal">
            <input type="number" class="common-input" readonly :value="getAbility.getTempModifier()">
            <input type="number" class="common-input" v-model.number="initiative.miscModifier">
        </div>
    </div>
</template>

<script>
import CharacterStore from 'Store/character.store';

export default {
    data() {
        return {
            initiative: CharacterStore.Instance.character.initiative
        }
    },
    computed: {
        getTotal() {
            return this.getAbility.getTempModifier() + this.initiative.miscModifier;
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
.initiative-component {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
}

.initiative-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
</style>
