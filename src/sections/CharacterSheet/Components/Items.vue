<template>
  <div>
    <div class="items-header-wrapper">
      <div class="items-header item-component">
        <label>X</label>
        <label>Item</label>
        <label>Page</label>
        <label>Weight</label>
      </div>
      <div class="items-header second-header item-component ">
        <label>X</label>
        <label>Item</label>
        <label>Page</label>
        <label>Weight</label>
      </div>
    </div>
    <div class="items-component"
         >
      <item v-for="(item, index) in items"
            :key="index"
            v-bind="item"
            @onItemUpdate="$emit('onItemUpdate', { index, item: $event })"></item>
    </div>
    <div class="total-Item">
      <label>Total Weight Carried</label>
      <input type="number"
             class="common-input"
             readonly
             :value="totalWeight">
    </div>
  </div>
</template>

<script>
import { Item } from './index'
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin'

export default {
  components: { Item },
  mixins: [MinimizableMixin],
  props: {
    items: {
      type: Array,
      required: true
    },
    totalWeight: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style>
.items-component {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.items-header {
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 75%;
}

.second-header {
  display: none !important;
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

@media screen and (min-width: 1024px) {
  .items-component {
    height: 408px;
  }

  .item-component {
    width: 50%;
  }

  .second-header {
    display: grid !important;
  }

  .items-header-wrapper {
    display: flex;
  }
}
</style>
