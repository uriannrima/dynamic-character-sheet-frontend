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
  components: { Possessions },
  mixins: [CharacterMixin]
}
</script>

<style>

</style>
