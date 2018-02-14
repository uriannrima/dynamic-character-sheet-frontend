<template>
  <div>
    <div class="black-box">
      <label>Money</label>
    </div>
    <div class="wealth-component">
      <div class="money-container">
        <div class="money-component">
          <label for="" title="Copper Pieces">CP —</label>
          <input type="number" v-model.number="wealth.copper">
        </div>
        <div class="money-component">
          <label for="" title="Silver Pieces">SP —</label>
          <input type="number" v-model.number="wealth.silver">
        </div>
        <div class="money-component">
          <label for="" title="Gold Pieces">GP —</label>
          <input type="number" v-model.number="wealth.gold">
        </div>
        <div class="money-component">
          <label for="" title="Platinum Pieces">PP —</label>
          <input type="number" v-model.number="wealth.platinum">
        </div>
      </div>
      <div class="treasure-container">
        <label class="conditional-modifiers-label">Treasures</label>
        <textarea class="common-textarea" v-model="wealth.treasure"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["wealth"]
}
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

.money-container {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  grid-row-gap: 5px;
}

.money-component {
  display: grid;
  grid-template-columns: 20% auto;
  text-align: center;
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
