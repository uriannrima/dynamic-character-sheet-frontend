<template>
  <div>
    <div class="black-box rounded">
      <div>
        <label>Other Possessions</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <div class="possessions-component"
         v-show="!minimize">
      <div class="possession-column"
           v-for="(c, column) in 2"
           :key="column">
        <div class="possesion-component possessions-header"
             v-show="column == 0 || showSecondHeader">
          <label>Item</label>
          <label>Page</label>
          <label>Weight</label>
        </div>
        <possession v-for="(r,row) in 17"
                    :key="row"
                    :possession="possessions[(column * 17) + row] || {}"></possession>
      </div>
      <div class="total-possesion">
        <label>Total Weight Carried</label>
        <input type="number"
               class="common-input"
               readonly
               :value="totalWeight">
      </div>
    </div>
    <div class="carry-capacities-container"
         v-show="!minimize">
      <carry-capacities :carryCapacities="carryCapacities"></carry-capacities>
    </div>
    <wealth v-show="!minimize"
            :wealth="wealth"></wealth>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { Possession, CarryCapacities, Wealth } from "./";
import ResizeMixin from 'Shared/mixins/events/resize.handler.mixin';
import MinimizableMixin from 'Shared/mixins/states/minimizable.mixin';

export default {
  mixins: [CharacterMixin, ResizeMixin, MinimizableMixin],
  components: { Possession, CarryCapacities, Wealth },
  props: ["possessions", "carryCapacities", "wealth"],
  data() {
    var minimumWidth = 768;
    return {
      minimumWidth,
      showSecondHeader: window.innerWidth >= minimumWidth
    };
  },
  computed: {
    totalWeight() {
      var gearWeight = 0;
      var { armor, shield, protectiveItems } = this.character.gear;
      if (armor) gearWeight += armor.weight;
      if (shield) gearWeight += shield.weight;
      if (protectiveItems) gearWeight = protectiveItems.reduce((acc, item) => acc + item.weight, gearWeight);
      return this.possessions.reduce((acc, possession) => {
        if (typeof possession.weight !== 'number') return acc;
        return acc + possession.weight;
      }, gearWeight).toPrecision(3);
    }
  },
  methods: {
    handleResize: function (event) {
      this.showSecondHeader = window.innerWidth >= this.minimumWidth;
    }
  }
}
</script>

<style>
.possessions-component {
  display: grid;
  grid-template-columns: 1fr;
}

.possessions-header {
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 75%;
}
.possessions-header label {
  border: solid 1px black;
}

.total-possesion {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-end: span 1;
}

.total-possesion label {
  font-weight: bolder;
  border: solid 1px black;
  text-align: center;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  .possessions-component {
    grid-template-columns: 1fr 1fr;
  }

  .total-possesion {
    grid-column-end: span 2;
  }
}
</style>
