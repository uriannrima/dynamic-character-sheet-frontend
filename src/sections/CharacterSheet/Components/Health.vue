<template>
  <div class="health-component">
    <div class="black-box health-bb">
      <label>HP</label>
      <label>Health Points</label>
    </div>
    <label class="health-label total-label">Total</label>
    <label class="wounds-label">Wounds/Current HP</label>
    <label class="nonlethal-label">Nonlethal<br>Damage</label>
    <input type="number"
           class="common-input"
           :value="status.healthPoints">
    <input type="text"
           class="common-input"
           :value="status.wounds">
    <input type="number"
           class="common-input"
           :value="status.nonLethalDamage">
  </div>
</template>

<script>
import { mapState, mapActions } from '../Store'

export default {
  computed: {
    ...mapState(['status', 'speed'])
  },
  methods: {
    ...mapActions(['updateStatus', 'updateSpeed'])
  }
}
</script>

<style>
.health-component {
  display: grid;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  grid-column-end: 3 span;
}

.health-component label {
  font-size: 50%;
  text-transform: uppercase;
  text-align: center;
}

.health-component input {
  grid-row-start: 2;
}

.health-bb {
  grid-column-end: 3 span;
}

@media screen and (min-width: 1024px) {
  .health-component {
    grid-template-columns: 12.2% 5.5% 54.5% 22.9%;
    grid-template-areas: '. total-label wounds-label nonlethal-label';
  }

  .health-bb {
    grid-column-end: 1 span;
    grid-row-start: 2;
  }

  .total-label {
    grid-area: total-label;
  }

  .wounds-label {
    grid-area: wounds-label;
  }

  .nonlethal-label {
    grid-area: nonlethal-label;
  }
}
</style>
