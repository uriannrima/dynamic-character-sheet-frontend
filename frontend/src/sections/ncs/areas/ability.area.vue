<template>
  <div class="ability-area">
    <ability-score-component/>
  </div>
</template>

<script>
import { AbilityScoreComponent } from '../components';

export default {
  components: { AbilityScoreComponent }
}
</script>

<style>
.ability-area {
  grid-area: ability-area;
  background-color: bisque;
}
</style>
