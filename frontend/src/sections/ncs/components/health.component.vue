<template>
    <div class="health-component">
        <div class="black-box health-bb">
            <label>HP</label>
            <label>Health Points</label>
        </div>
        <div class="black-box">
            <label>Speed</label>
        </div>
        <input type="number" class="common-input" v-model.number="character.status.healthPoints">
        <input type="text" class="common-input" v-model="character.status.wounds">
        <input type="number" class="common-input" v-model.number="character.status.nonLethalDamage">
        <input type="text" class="speed-input common-input" v-model="character.speed">
        <label class="total-label">Total</label>
        <label>Wounds/Current HP</label>
        <label>Nonlethal<br>Damage</label>
        <label>&nbsp</label>
    </div>
</template>

<script>
import CharacterStore from 'Store/character.store';

export default {
    data() {
        return {
            character: CharacterStore.Instance.character
        }
    }
}
</script>

<style>
.health-component {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
}

.health-bb {
  grid-column-end: 3 span;
}

.health-component label {
  font-size: 50%;
  text-transform: uppercase;
  text-align: center;
}

.speed-input {
  text-align: center;
}
</style>
