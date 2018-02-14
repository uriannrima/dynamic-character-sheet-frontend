<template>
    <div>
        <div class="black-box rounded">
            <div>
                <label>Other Possessions</label>
                <span class="add-icon glyphicon" :class="{'glyphicon-zoom-out' : !minimize, 'glyphicon-zoom-in' : minimize}" @click="minimize = !minimize"></span>
            </div>
        </div>
        <div class="possessions-component" v-show="!minimize">
            <div class="possession-column" v-for="(c, column) in 2" :key="column">
                <div class="possesion-component possessions-header" v-show="column == 0 || showSecondHeader">
                    <label>Item</label>
                    <label>Page</label>
                    <label>Weight</label>
                </div>
                <possession-component v-for="(r,row) in 17" :key="row" :possession="possessions[(column * 17) + row]"></possession-component>
            </div>
            <div class="total-possesion">
                <label>Total Weight Carried</label>
                <input type="number" class="common-input" readonly :value="totalWeight">
            </div>
        </div>
        <div class="carry-capacities-container" v-show="!minimize">
            <carry-capacities-component :carryCapacities="carryCapacities"></carry-capacities-component>
        </div>
        <wealth-component v-show="!minimize" :wealth="wealth"></wealth-component>
    </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import PossessionComponent from "./possession.component";
import CarryCapacitiesComponent from './carry-capacities.component';
import WealthComponent from './wealth.component';
import ResizeMixin from 'Shared/mixins/resize.handler.mixin';

export default {
    mixins: [CharacterMixin, ResizeMixin],
    components: { PossessionComponent, CarryCapacitiesComponent, WealthComponent },
    props: ["possessions", "carryCapacities", "wealth"],
    data() {
        var minimumWidth = 768;
        return {
            minimumWidth,
            showSecondHeader: window.innerWidth >= minimumWidth,
            minimize: false
        };
    },
    computed: {
        totalWeight() {
            var gearWeight = 0;
            var { armor, shield, protectiveItems } = this.character.gear;
            if (armor) gearWeight += armor.weight;
            if (shield) gearWeight += shield.weight;
            if (protectiveItems) gearWeight = protectiveItems.reduce((acc, item) => acc + item.weight, gearWeight);
            return this.possessions.reduce((acc, possession) => acc + possession.weight, gearWeight).toPrecision(3);
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
