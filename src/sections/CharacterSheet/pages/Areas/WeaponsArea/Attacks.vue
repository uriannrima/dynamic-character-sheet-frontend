<template>
  <div class="attacks-component">
    <div class="black-box rounded h-md-up">
      <div>
        <label>Attacks</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <attack v-show="!minimize"
            v-for="(attack, index) in character.attacks"
            :key="index"
            :attack="attack" />
  </div>
</template>

<script>
import { Attack } from './';
import CharacterMixin from '@Store/mixins/character.mixin';
import MinimizableMixin from '@Shared/mixins/states/minimizable.mixin';

export default {
  mixins: [CharacterMixin, MinimizableMixin],
  components: { Attack }
}
</script>

<style>
.attacks-component > div {
  margin-bottom: 15px;
}
</style>
