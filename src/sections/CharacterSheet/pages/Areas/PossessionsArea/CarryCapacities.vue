<template>
  <div class="carry-capacities-component">
    <carry-capacity v-for="(carryCapacity, index) in carryCapacities"
                    :key="index"
                    v-bind="$extract(carryCapacity)"
                    @updateCarryCapacity="updateCarryCapacities($event, index)"></carry-capacity>
  </div>
</template>

<script>
import { CarryCapacity } from './';

export default {
  components: { CarryCapacity },
  props: ['carryCapacities'],
  methods: {
    updateCarryCapacities($event, key) {
      const carryCapacities = { [key]: $event };
      this.$emit('updateCarryCapacities', { carryCapacities });
    }
  }
};
</script>

<style>
.carry-capacities-container {
  border: solid 1px black;
  padding: 5px 5px 0 5px;
}

.carry-capacities-component {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 2px;
}
</style>
