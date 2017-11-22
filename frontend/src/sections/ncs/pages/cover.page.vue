<template>
  <div>
    <campaign-area class="campaign-area" />
    <gear-area class="gear-area" />
    <possessions-area class="possessions-area" />
    <feats-area class="feats-area" />
    <special-area class="special-area" />
    <languages-area class="languages-area" />
    <spells-area class="spells-area" />
    <dc-area class="dc-area" />
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
  grid-template-rows: 15% 18% 10% 20% 20% auto;
  /* prettier-ignore */
  grid-template-areas: 
    "campaign-area feats-area spells-area"
    "gear-area feats-area spells-area"
    "gear-area special-area spells-area"
    "possessions-area special-area spells-area"
    "possessions-area special-area dc-area"
    "possessions-area languages-area dc-area";
}

.campaign-area {
  grid-area: campaign-area;
  background-color: rgb(47, 91, 145);
}

.dc-area {
  grid-area: dc-area;
  background-color: rgb(104, 81, 131);
}

.feats-area {
  grid-area: feats-area;
  background-color: rgb(177, 64, 138);
}

.gear-area {
  grid-area: gear-area;
  background-color: rgb(220, 190, 152);
}

.languages-area {
  grid-area: languages-area;
  background-color: rgb(119, 252, 173);
}

.possessions-area {
  grid-area: possessions-area;
  background-color: rgb(224, 163, 31);
}

.special-area {
  grid-area: special-area;
  background-color: rgb(30, 147, 136);
}

.spells-area {
  grid-area: spells-area;
  background-color: rgb(53, 24, 106);
}
</style>
