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
import CharacterMixin from 'Store/character.mixin';
import MinimizableMixin from 'Shared/mixins/states/minimizable.mixin';

export default {
  mixins: [CharacterMixin, MinimizableMixin],
  components: { Attack }
}
</script>

<style>
.attacks-component {
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: 1fr;
  grid-row-gap: 5px;
}

.attack-component span,
.attack-component div {
  font-size: 9px;
  text-transform: uppercase;
  font-weight: bold;
  display: grid;
  align-items: center;
}

.attack-component input {
  width: 100%;
  height: 100%;
}

.attack-component select {
  font-size: 13px;
}
</style>
