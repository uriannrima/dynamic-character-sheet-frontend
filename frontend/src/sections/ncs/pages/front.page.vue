<template>
  <div class="page front">
    <description-area/>
    <ability-area/>
    <armor-area/>
    <initiative-area/>
    <skills-area/>
    <items-area/>
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

@media screen and (max-width: 768px) {
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

@media screen and (max-width: 567px) {
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
</style>
