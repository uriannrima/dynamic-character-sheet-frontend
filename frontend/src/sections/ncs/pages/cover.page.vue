<template>
  <div class="page cover">
    <campaign-area/>
    <gear-area/>
    <possessions-area/>
    <feats-area/>
    <special-area/>
    <languages-area/>
    <spells-area/>
    <dc-area/>
  </div>
</template>

<script>
import * as Areas from '../areas';

export default {
  components: Areas
}
</script>

<style>
.cover {
  display: grid;
  grid-template-columns: 50% 20% auto;
  grid-template-rows: 14% 18% 10% 20% 20% auto;
  /* prettier-ignore */
  grid-template-areas: 
    "campaign-area feats-area spells-area"
    "gear-area feats-area spells-area"
    "gear-area special-area spells-area"
    "possessions-area special-area spells-area"
    "possessions-area special-area dc-area"
    "possessions-area languages-area dc-area";
}
</style>
