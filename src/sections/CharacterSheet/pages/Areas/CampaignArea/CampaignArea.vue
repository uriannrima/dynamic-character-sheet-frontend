<template>
  <div class="campaign-grid">
    <div class="campaign-component">
      <input type="text" class="common-input only-bottom" v-model="character.campaign">
      <label>Campaign</label>
    </div>
    <div class="experience-component">
      <input type="number" class="common-input" v-model.number="character.experience">
      <label>Experience Points</label>
    </div>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin]
}
</script>

<style>
.campaign-grid {
  display: grid;
  grid-template-rows: 50% 50%;
}

.campaign-grid label {
  text-transform: uppercase;
  font-size: 75%;
}
</style>
