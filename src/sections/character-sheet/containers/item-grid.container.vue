<script>
import ItemComponent from '../components/item.component';

export default {
  props: ['items'],
  components: { ItemComponent },
  computed: {
    /** Calculated value of total weight carried by the character. */
    totalWeightCarried: function() {
      var value = this.items.map(i => i.weight).reduce((prev, next) => prev + next)
      return value.toPrecision(3);
    }
  }
}
</script>
<template>
    <div class="item-grid-container">
        <div style="display: flex">
            <div class="item-header-container">
                <div class="item-header">
                    <div class="item-title">
                        <span>Item</span>
                    </div>
                    <div class="item-page">
                        <span>Pg.</span>
                    </div>
                    <div class="item-weight">
                        <span>Wt.</span>
                    </div>
                </div>
            </div>
            <div class="item-header-container">
                <div class="item-header">
                    <div class="item-title">
                        <span>Item</span>
                    </div>
                    <div class="item-page">
                        <span>Pg.</span>
                    </div>
                    <div class="item-weight">
                        <span>Wt.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="possesion-dynamic-container">
            <item-component v-for="(item, itemIndex) in items" :key="itemIndex" :item="item"></item-component>
            <div class="single-possession">
                <div class="item-header">
                    <div class="item-title">
                        <span class="total-weight-carried">Total Weight Carried</span>
                    </div>
                    <div class="total-weight">
                        <input type="number" class="full-input total-weight-input" readonly :value="totalWeightCarried">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>