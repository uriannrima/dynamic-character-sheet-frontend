<template>
  <div>
    <possessions :possessions="character.items"
                 :carryCapacities="character.carryCapacities"
                 :wealth="character.money"></possessions>
  </div>
</template>

<script>
import CharacterMixin from '@Store/mixins/character.mixin';
import { Possessions } from "./";

export default {
  mixins: [CharacterMixin],
  components: { Possessions }
}
</script>

<style>

</style>
