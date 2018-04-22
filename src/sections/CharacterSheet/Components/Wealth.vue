<template>
  <div>
    <div class="black-box">
      <label>Money</label>
    </div>
    <div class="wealth-component">
      <div class="coins-container">
        <coin v-for="(coin, index) in wealth.coins"
              :key="index"
              v-bind="$extract(coin)"
              @onCoinUpdate="$emit('onCoinUpdate', { index, coin: $event })"></coin>
      </div>
      <div class="treasure-container">
        <label class="condition-modifiers-label">Treasures</label>
        <textarea class="common-textarea"
                  :value="wealth.treasure"
                  @change="$emit('onTreasureUpdate', $event.target.value)"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Coin from "./Coin";

export default {
  components: { Coin },
  props: ["wealth"]
};
</script>

<style>
.wealth-component {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 5px;
  padding: 5px;
  border: solid 1px black;
}

.coins-container {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  grid-row-gap: 5px;
}

@media screen and (min-width: 768px) {
  .wealth-component {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
  }
}
</style>
