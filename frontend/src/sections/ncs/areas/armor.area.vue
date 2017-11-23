<template>
  <div class="health-armor-grid">
    <health-component/>
    <primary-armor-component/>
  </div>
</template>

<script>
import { HealthComponent, PrimaryArmorComponent } from '../components';

export default {
  components: { HealthComponent, PrimaryArmorComponent }
}
</script>

<style>
.health-armor-grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.grid {
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

.health-armor-grid input,
.common-input {
  width: 90%;
  border: solid 1px black;
}
</style>
