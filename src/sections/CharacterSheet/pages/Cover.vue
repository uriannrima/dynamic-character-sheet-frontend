<template>
  <div>
    <div>
      <campaign-area class="campaign-area" />
      <gear-area class="gear-area" />
      <possessions-area class="possessions-area"></possessions-area>
    </div>
    <div>
      <feats-area class="feats-area" />
      <special-abilities-area class="special-area" />
      <languages-area class="languages-area" />
    </div>
    <div>
      <spells-area class="spells-area" />
      <spell-save-area class="dc-area" />
      <spells-per-day-area class="spells-per-day-area"></spells-per-day-area>
    </div>
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
} from '../Areas';

export default {
  components: { CampaignArea, GearArea, PossessionsArea, FeatsArea, SpecialAbilitiesArea, LanguagesArea, SpellsArea, SpellSaveArea, SpellsPerDayArea }
}
</script>

<style>
.cover > div > div {
  margin-top: 5px;
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

@media screen and (min-width: 1024px) {
  .front > div {
    margin-top: unset;
  }

  .cover {
    display: flex;
    flex-direction: row;
  }

  .cover > div:nth-child(1) {
    width: 50%;
  }

  .cover > div:not(:nth-child(1)) {
    width: 25%;
  }

  .dc-area {
    height: 12%;
  }

  .spells-area {
    height: 60%;
    border: solid 1px black;
  }

  .spells-per-day-area {
    height: 28%;
  }
}
</style>
