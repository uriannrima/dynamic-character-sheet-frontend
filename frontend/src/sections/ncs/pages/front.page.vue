<template>
  <div>
    <description-area class="description-area" />
    <ability-area class="ability-area" />
    <armor-area class="armor-area" />
    <initiative-area class="initiative-area" />
    <skills-area class="skills-area" />
    <items-area class="items-area" />
  </div>
</template>

<script>
import * as Areas from '../areas';

export default {
  components: Areas
}
</script>

<style>
.front {
  display: grid;
  grid-template-columns: 30% 30% auto;
  grid-template-rows: 15% 10% 10% auto;
  /* prettier-ignore */
  grid-template-areas: 
    "description-area description-area description-area" 
    "ability-area armor-area armor-area"
    "ability-area initiative-area skills-area" 
    "items-area items-area skills-area";
}

@media screen and (max-width: 1023px) {
  .front {
    grid-template-columns: 50% auto;
    grid-template-rows: 15% 20% 10% auto;
    /* prettier-ignore */
    grid-template-areas: 
      "description-area description-area" 
      "ability-area initiative-area"
      "armor-area armor-area" 
      "items-area skills-area";
  }
}

@media screen and (max-width: 768px) {
  .front {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    /* prettier-ignore */
    grid-template-areas: 
      "description-area" 
      "ability-area"
      "initiative-area"
      "armor-area"
      "skills-area"
      "items-area";
  }
}

.ability-area {
  grid-area: ability-area;
}

.armor-area {
  grid-area: armor-area;
}

.initiative-area {
  grid-area: initiative-area;
  background-color: chocolate;
}

.items-area {
  grid-area: items-area;
  background-color: greenyellow;
}

.skills-area {
  grid-area: skills-area;
  background-color: orchid;
}
</style>
