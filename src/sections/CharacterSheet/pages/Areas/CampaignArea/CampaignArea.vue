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
               :value="campaign"
               @change="updateCampaign({ campaign: $event.target.value })">
        <label>Campaign</label>
      </div>
      <div class="experience-component">
        <input type="number"
               class="common-input"
               :value="experience"
               @change="updateExperience({ experience: $event.target.value * 1 })">
        <label>Experience Points</label>
      </div>
    </div>
  </div>
</template>

<script>
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';
import { mapState, mapActions } from 'store/CharacterModule';

export default {
  mixins: [MinimizableMixin],
  computed: {
    ...mapState(['campaign', 'experience'])
  },
  methods: {
    ...mapActions(['updateCampaign', 'updateExperience'])
  }
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
