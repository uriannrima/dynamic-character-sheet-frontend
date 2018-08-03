<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Inventory</span>
    <div class="resume-cards__body--column">
      <span v-if="items.length <= 0"
            class="list--no-items">No items</span>
      <div v-else
           class="items">
        <div class="items__header">
          <span class="item__active">Active</span>
          <span class="item__name">Name</span>
          <span class="item__weight">Weight</span>
          <span class="item__quantity">Qty</span>
          <span class="item__cost">Cost (GP)</span>
          <span class="item__slot">Slot</span>
        </div>
        <div class="items__list">
          <inventory-item v-for="item in items"
                          :key="item.name"
                          :item="item"></inventory-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InventoryItem from './InventoryItem';

export default {
  components: { InventoryItem },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/variables.scss';
input {
  margin: 0;
}

$item__active--width: 15%;
$item__name--width: 28%;
$item__weight--width: 10%;
$item__quantity--width: 15%;
$item__cost--width: 20%;
$item__slot--width: 10%;

.items {
  &__header {
    display: flex;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__list {
    padding-top: 5px;
  }
}

.item {
  display: flex;
  align-items: center;

  span {
    font-size: 13px;
  }

  small {
    font-size: 10px;
    color: $secondary-value__color;
  }

  & + .item {
    margin-top: 8px;
    border-top: 1px dotted #eaeaea;
    padding-top: 8px;
  }
}

.item,
.items {
  .item__active {
    width: $item__active--width;
    text-align: center;
    .checked {
      background-color: $success_color;
    }
  }
  .item__name {
    width: $item__name--width;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item__weight {
    width: $item__weight--width;
    text-align: center;
  }
  .item__quantity {
    width: $item__quantity--width;
    text-align: center;
  }
  .item__cost {
    width: $item__cost--width;
    text-align: center;
  }
  .item__slot {
    width: $item__slot--width;
    text-align: center;

    i {
      font-size: 28px;
      color: $secondary-value__color;
    }
  }
}
</style>
