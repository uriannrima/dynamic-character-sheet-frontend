<template>
  <div class="initiative-component">
    <div class="black-box initiative-bb">
      <label>Initiative</label>
      <label>Modifier</label>
    </div>
    <input type="number"
           class="common-input"
           readonly
           :value="totalInitiative">
    <input type="number"
           class="common-input"
           readonly
           :value="keyAbilityModifier">
    <input type="number"
           class="common-input"
           v-model.number="initiativeModifier"
           @change="$emit('updateInitiative', $event.target.value * 1)">
    <label class="h-md-down">&nbsp;</label>
    <label class="h-md-down">&nbsp;</label>
    <label class="total-label">Total</label>
    <label>{{ keyAbility.substring(0,3) }}<br>Modifier</label>
    <label>Misc<br>Modifier</label>
  </div>
</template>

<script>
export default {
  props: {
    initiativeModifier: {
      type: Number,
      default: 0
    },
    keyAbility: {
      type: String,
      default: ''
    },
    keyAbilityModifier: {
      type: Number,
      default: 0
    },
    totalInitiative: {
      type: Number,
      default: 0
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
    padding: 0 5px;
    grid-column-gap: 2%;
  }

  .initiative-bb {
    grid-column-end: 2 span;
  }
}
</style>
