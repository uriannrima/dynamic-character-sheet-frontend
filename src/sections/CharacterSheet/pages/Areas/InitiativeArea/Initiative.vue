<template>
    <div class="initiative-component">
        <div class="black-box initiative-bb">
            <label>Initiative</label>
            <label>Modifier</label>
        </div>
        <input type="number" class="common-input" readonly :value="getTotal">
        <input type="number" class="common-input" readonly :value="getAbility.getTempModifier()">
        <input type="number" class="common-input" v-model.number="character.initiative.miscModifier">
        <label class="h-md-down">&nbsp;</label>
        <label class="h-md-down">&nbsp;</label>
        <label class="total-label">Total</label>
        <label>Dex<br>Modifier</label>
        <label>Misc<br>Modifier</label>
    </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin],
  computed: {
    getTotal() {
      return this.getAbility.getTempModifier() + this.character.initiative.miscModifier;
    },
    getAbility() {
      return this.character.abilityScores.find(abilityScore => {
        return abilityScore.name === 'dexterity';
      });
    }
  }
}
</script>

<style>
.initiative-component {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  align-items: center;
  justify-items: center;
}

.initiative-bb {
  grid-column-end: 3 span;
}

.initiative-component label {
  font-size: 50%;
  text-transform: uppercase;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .initiative-component {
    grid-template-columns: repeat(5, 1fr);
  }

  .initiative-bb {
    grid-column-end: 2 span;
  }
}
</style>
