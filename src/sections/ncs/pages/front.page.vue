<template>
  <div>
    <description-area class="description-area" />
    <ability-area class="ability-area" />
    <armor-area class="armor-area" />
    <initiative-area class="initiative-area" />
    <weapons-area class="weapons-area" />
    <skills-area class="skills-area" />
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
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  grid-row-gap: 5px;
  /* prettier-ignore */
  grid-template-areas: 
      "description-area" 
      "ability-area"
      "armor-area" 
      "initiative-area"
      "weapons-area"
      "skills-area";
}

/**
@media screen and (min-width: 1023px) {
  .front {
    grid-template-columns: 30% 30% auto;
    grid-template-rows: 15% 10% 7% auto;
    grid-row-gap: unset;
    grid-template-areas: 
    "description-area description-area description-area" 
    "ability-area armor-area armor-area"
    "ability-area initiative-area skills-area" 
    "weapons-area weapons-area skills-area";
  }
}
**/

.ability-area {
  grid-area: ability-area;
}

.armor-area {
  grid-area: armor-area;
}

.initiative-area {
  grid-area: initiative-area;
}

.weapons-area {
  grid-area: weapons-area;
}

.skills-area {
  grid-area: skills-area;
}
</style>
