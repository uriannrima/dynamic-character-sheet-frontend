<template>
  <div class="front">
    <description-area class="description-area" />
    <ability-area class="ability-area" />
    <div class="black-box rounded h-md-up">
      <div>
        <label>Combat</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <armor-area v-show="!minimize" />
    <initiative-area v-show="!minimize"
                     class="initiative-area" />
    <attacks-area v-show="!minimize"
                  class="attacks-area" />
    <skills-area class="skills-area" />
  </div>
</template>

<script>
import { DescriptionArea, AbilityArea, ArmorArea, InitiativeArea, AttacksArea, SkillsArea } from '../Areas';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';

export default {
  components: { DescriptionArea, AbilityArea, ArmorArea, InitiativeArea, AttacksArea, SkillsArea },
  mixins: [MinimizableMixin]
}
</script>

<style>
.front > div {
  margin-top: 5px;
}

@media screen and (min-width: 1024px) {
  .front > div {
    margin-top: unset;
  }

  .front {
    display: grid;
    grid-template-columns: 30% 30% auto;
    grid-template-rows: 168px 112px 90px 918px;
    grid-row-gap: unset;
    grid-template-areas:
      "description-area description-area description-area"
      "ability-area armor-area armor-area"
      "ability-area initiative-area skills-area"
      "attacks-area attacks-area skills-area";
  }
}

.ability-area {
  grid-area: ability-area;
}

.initiative-area {
  grid-area: initiative-area;
}

.attacks-area {
  grid-area: attacks-area;
}

.skills-area {
  grid-area: skills-area;
}
</style>
