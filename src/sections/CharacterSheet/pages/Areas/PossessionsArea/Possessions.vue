<template>
  <div>
    <div class="black-box rounded">
      <div>
        <label>Other Items</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <div class="items-component"
         v-show="!minimize">
      <div class="item-column"
           v-for="(c, column) in 2"
           :key="column">
        <div class="item-component items-header"
             v-show="column == 0 || showSecondHeader">
          <label>Item</label>
          <label>Page</label>
          <label>Weight</label>
        </div>
        <item v-for="(r,row) in 17"
              :key="row"
              v-bind="$extract(items[(column * 17) + row])"
              @onItemUpdate="updateItem({ index: ((column * 17) + row), item: $event })">
        </item>
      </div>
      <div class="total-Item">
        <label>Total Weight Carried</label>
        <input type="number"
               class="common-input"
               readonly
               :value="getTotalWeight">
      </div>
    </div>
    <div class="carry-capacities-container"
         v-show="!minimize">
      <carry-capacities :carryCapacities="carryCapacities"
                        @onCarryCapacityUpdate="updateCarryCapacity"></carry-capacities>
    </div>
    <wealth v-show="!minimize"
            :wealth="wealth"
            @onCoinUpdate="updateCoin"
            @onTreasureUpdate="updateTreasure"></wealth>
  </div>
</template>

<script>
import { Item, CarryCapacities, Wealth } from "./";
import ResizeMixin from "shared/mixins/events/resize.handler.mixin";
import MinimizableMixin from "shared/mixins/states/minimizable.mixin";
import { mapState, mapGetters, mapActions } from "store/CharacterModule";

export default {
  components: { Item, CarryCapacities, Wealth },
  mixins: [ResizeMixin, MinimizableMixin],
  data() {
    var minimumWidth = 768;
    return {
      minimumWidth,
      showSecondHeader: window.innerWidth >= minimumWidth
    };
  },
  computed: {
    ...mapState(["items", "carryCapacities", "wealth"]),
    ...mapGetters(["getTotalWeight"])
  },
  methods: {
    ...mapActions(["updateItem", "updateCarryCapacity", 'updateCoin', 'updateTreasure']),
    handleResize: function() {
      this.showSecondHeader = window.innerWidth >= this.minimumWidth;
    }
  }
};
</script>

<style>
.items-component {
  display: grid;
  grid-template-columns: 1fr;
}

.items-header {
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 75%;
}
.items-header label {
  border: solid 1px black;
}

.total-Item {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-end: span 1;
}

.total-Item label {
  font-weight: bolder;
  border: solid 1px black;
  text-align: center;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  .items-component {
    grid-template-columns: 1fr 1fr;
  }

  .total-Item {
    grid-column-end: span 2;
  }
}
</style>
