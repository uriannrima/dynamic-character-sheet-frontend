<template>
  <div class="shield-item-component">
    <div>
      <div class="black-box rounded">
        <label>Shield/Protecetive Item</label>
      </div>
      <input type="text" class="common-input" v-model="shield.name">
    </div>
    <div>
      <div>
        <div class="black-box">
          <label>AC Bonus</label>
        </div>
        <input type="number" class="common-input" v-model.number="shield.acBonus">
      </div>
      <div>
        <div class="black-box">
          <label>Weight</label>
        </div>
        <input type="number" class="common-input" v-model.number="shield.weight">
      </div>
    </div>
    <div>
      <div>
        <div class="black-box">
          <label>Check Penalty</label>
        </div>
        <input type="number" class="common-input" v-model.number="shield.checkPenalty">
      </div>
      <div>
        <div class="black-box">
          <label>Spell Failure</label>
        </div>
        <input type="number" class="common-input" v-model.number="shield.spellFailure">
      </div>
    </div>
    <div>
      <div class="black-box">
        <label>Special Properties</label>
      </div>
      <input type="text" class="common-input" v-model="shield.specialProperties">
    </div>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin],
  props: ["shield"]
}
</script>

<style>

</style>
