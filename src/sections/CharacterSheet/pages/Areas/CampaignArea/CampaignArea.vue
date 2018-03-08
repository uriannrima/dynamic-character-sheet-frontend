<template>
  <div>
    <div class="black-box rounded h-md-up">
      <div>
        <label>Campaign</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <div class="campaign-grid"
         v-show="!minimize">
      <div class="campaign-component">
        <input type="text"
               class="common-input only-bottom"
               v-model="character.campaign">
        <label>Campaign</label>
      </div>
      <div class="experience-component">
        <input type="number"
               class="common-input"
               v-model.number="character.experience">
        <label>Experience Points</label>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterMixin from 'store/mixins/character.mixin';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';

export default {
  mixins: [CharacterMixin, MinimizableMixin]
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
