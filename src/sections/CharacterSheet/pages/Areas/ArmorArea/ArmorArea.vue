<template>
  <div class="armor-area">
    <health></health>
    <primary-armor></primary-armor>
  </div>
</template>

<script>
import { Health, PrimaryArmor } from './';

export default {
  components: { Health, PrimaryArmor }
}
</script>

<style>
.armor-area {
  grid-area: armor-area;
}

.armor-area > div:nth-child(2) {
  margin-top: 1px;
}

.grid {
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

.common-input {
  width: 100%;
  border: solid 1px black;
}

.total-label {
  font-weight: bolder;
  font-size: 60% !important;
}

.health-armor-header label {
  font-size: 50%;
  line-height: 8px;
  text-transform: uppercase;
  text-align: center;
}

.last-input {
  justify-self: end;
  width: 95% !important;
}

@media screen and (min-width: 1024px) {
  .armor-area {
    padding: 0 5px;
  }
}
</style>
