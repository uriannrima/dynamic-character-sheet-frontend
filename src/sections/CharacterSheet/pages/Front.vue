<template>
  <div class="front">
    <transition name="character-sheet-fade"
                mode="out-in">
      <component :is="area"> </component>
    </transition>
    <!-- <description-area/>
    <ability-area/>
    <armor-area />
    <initiative-area/>
    <attacks-area/>
    <skills-area/> -->
  </div>
</template>

<script>
import { DescriptionArea, AbilityArea, ArmorArea, InitiativeArea, AttacksArea, SkillsArea } from '../Areas'

export default {
  components: { DescriptionArea, AbilityArea, ArmorArea, InitiativeArea, AttacksArea, SkillsArea },
  props: {
    area: {
      type: String,
      default: 'description-area'
    }
  }
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
      'description-area description-area description-area'
      'ability-area armor-area armor-area'
      'ability-area initiative-area skills-area'
      'attacks-area attacks-area skills-area';
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
