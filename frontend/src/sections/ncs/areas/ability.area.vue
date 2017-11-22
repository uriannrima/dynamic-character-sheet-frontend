<template>
  <div class="ability-area">
    <abilities-score-component/>
  </div>
</template>

<script>
import { AbilitiesScoreComponent } from '../components';

export default {
  components: { AbilitiesScoreComponent }
}
</script>

<style>
.ability-area {
  grid-area: ability-area;
}
</style>
