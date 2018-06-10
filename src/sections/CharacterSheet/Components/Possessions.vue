<template>
  <div>
    <div class="black-box rounded">
      <div>
        <label>Other Items</label>
      </div>
    </div>
    <items :items="items"
           :totalWeight="getTotalWeight"
           @onItemUpdate="updateItem"></items>
    <div class="carry-capacities-container">
      <carry-capacities :carryCapacities="carryCapacities"
                        @onCarryCapacityUpdate="updateCarryCapacity"></carry-capacities>
    </div>
    <wealth :wealth="wealth"
            @onCoinUpdate="updateCoin"
            @onTreasureUpdate="updateTreasure"></wealth>
  </div>
</template>

<script>
import { Items, CarryCapacities, Wealth } from './index'
import ResizeMixin from 'shared/mixins/events/resize.handler.mixin'
import { mapState, mapGetters, mapActions } from '../Store'
import { Sortable } from '@shopify/draggable'

export default {
  components: { Items, CarryCapacities, Wealth },
  mixins: [ResizeMixin],
  data () {
    var minimumWidth = 768
    return {
      minimumWidth,
      showSecondHeader: window.innerWidth >= minimumWidth
    }
  },
  computed: {
    ...mapState(['items', 'carryCapacities', 'wealth']),
    ...mapGetters(['getTotalWeight'])
  },
  mounted () {
    new Sortable(document.querySelectorAll('.items-component'), {
      draggable: '.item-component',
      handle: 'span',
      mirror: {
        constrainDimensions: true
      }
    })
  },
  methods: {
    ...mapActions(['updateItem', 'updateCarryCapacity', 'updateCoin', 'updateTreasure']),
    handleResize: function () {
      this.showSecondHeader = window.innerWidth >= this.minimumWidth
    }
  }
}
</script>
