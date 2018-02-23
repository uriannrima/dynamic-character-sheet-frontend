<template>
  <div>
    <campaign-area class="campaign-area" />
    <gear-area class="gear-area" />
    <possessions-area class="possessions-area"></possessions-area>
    <feats-area class="feats-area" />
    <special-abilities-area class="special-area" />
    <languages-area class="languages-area" />
    <spells-area class="spells-area" />
    <spell-save-area class="dc-area" />
    <spells-per-day-area class="spells-per-day-area"></spells-per-day-area>
  </div>
</template>

<script>
import {
  CampaignArea,
  GearArea,
  PossessionsArea,
  FeatsArea,
  SpecialAbilitiesArea,
  LanguagesArea,
  SpellsArea,
  SpellSaveArea,
  SpellsPerDayArea
} from './Areas';

export default {
  components: { CampaignArea, GearArea, PossessionsArea, FeatsArea, SpecialAbilitiesArea, LanguagesArea, SpellsArea, SpellSaveArea, SpellsPerDayArea }
}
</script>

<style>
.cover {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  grid-row-gap: 5px;
  /* prettier-ignore */
  grid-template-areas:
    "campaign-area"
    "gear-area"
    "possessions-area"
    "feats-area"
    "special-area"
    "languages-area"
    "spells-area"
    "dc-area"
    "spells-per-day-area";
}

.campaign-area {
  grid-area: campaign-area;
}

.dc-area {
  grid-area: dc-area;
}

.feats-area {
  grid-area: feats-area;
}

.gear-area {
  grid-area: gear-area;
}

.languages-area {
  grid-area: languages-area;
}

.possessions-area {
  grid-area: possessions-area;
}

.special-area {
  grid-area: special-area;
}

.spells-area {
  grid-area: spells-area;
}

.spells-per-day-area {
  grid-area: spells-per-day-area;
}
</style>
