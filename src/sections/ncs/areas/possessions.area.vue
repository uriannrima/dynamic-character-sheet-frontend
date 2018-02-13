<template>
  <div>
    <possessions-component :possessions="character.items" :carryCapacities="character.carryCapacities" :wealth="character.money"></possessions-component>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { PossessionsComponent } from "./components";

export default {
  mixins: [CharacterMixin],
  components: { PossessionsComponent }
}
</script>

<style>

</style>
