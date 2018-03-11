<template>
  <div class="health-component">
    <div class="black-box health-bb">
      <label>HP</label>
      <label>Health Points</label>
    </div>
    <div class="h-lg-up black-box">
      <label>Speed</label>
    </div>
    <input type="number"
           class="health-input common-input"
           :value="status.healthPoints"
           @change="updateStatus({ healthPoints : $event.target.value * 1 })">
    <input type="text"
           class="wounds-input common-input"
           :value="status.wounds"
           @change="updateStatus({ wounds : $event.target.value })">
    <input type="number"
           class="nonlethal-input common-input"
           :value="status.nonLethalDamage"
           @change="updateStatus({ nonLethalDamage : $event.target.value * 1 })">
    <input type="text"
           class="speed-input common-input"
           :value="speed"
           @change="updateSpeed({ speed : $event.target.value })">
    <label class="health-label total-label">Total</label>
    <label class="wounds-label">Wounds/Current HP</label>
    <label class="nonlethal-label">Nonlethal<br>Damage</label>
    <label class="speed-label h-md-only">Speed</label>
  </div>
</template>

<script>
import { mapState, mapActions } from 'store/CharacterModule';

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
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
}

.health-bb {
  grid-column-end: 3 span;
}

.health-component label {
  font-size: 50%;
  text-transform: uppercase;
  text-align: center;
}

.speed-input {
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .health-component {
    grid-template-columns: 10.6% 4.8% 54.6% repeat(2, 1fr);
    grid-column-gap: 9px;
    grid-template-areas: ". health-label wounds-label nonlethal-label speed-label";
  }

  .health-component input {
    grid-row-start: 2;
  }

  .health-bb {
    grid-column-end: 1 span;
    grid-row-start: 2;
  }

  .health-label {
    grid-area: health-label;
  }

  .wounds-label {
    grid-area: wounds-label;
  }

  .nonlethal-label {
    grid-area: nonlethal-label;
  }

  .speed-label {
    grid-area: speed-label;
  }
}
</style>
