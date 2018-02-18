<template>
  <div>
    <description-area class="description-area" />
    <ability-area class="ability-area" />
    <div style="grid-template-area: combat-area" class="black-box rounded h-md-up">
      <div>
        <label>Combat</label>
        <span class="add-icon glyphicon" :class="{'glyphicon-zoom-out' : !minimize, 'glyphicon-zoom-in' : minimize}" @click="minimize = !minimize"></span>
      </div>
    </div>
    <armor-area v-show="!minimize" class="armor-area" />
    <initiative-area v-show="!minimize" class="initiative-area" />
    <weapons-area v-show="!minimize" class="weapons-area" />
    <skills-area class="skills-area" />
  </div>
</template>

<script>
import * as Areas from '../areas';

export default {
  components: Areas,
  data() {
    return {
      minimize: false
    }
  }
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
      "combat-area"
      "armor-area" 
      "initiative-area"
      "weapons-area"
      "skills-area";
}

@media screen and (min-width: 1024px) {
  .front {
    grid-template-columns: 30% 30% auto;
    grid-template-rows: 168px 112px 90px 918px;
    grid-row-gap: unset;
    grid-template-areas:
      "description-area description-area description-area"
      "ability-area armor-area armor-area"
      "ability-area initiative-area skills-area"
      "weapons-area weapons-area skills-area";
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
}

.weapons-area {
  grid-area: weapons-area;
}

.skills-area {
  grid-area: skills-area;
}
</style>
