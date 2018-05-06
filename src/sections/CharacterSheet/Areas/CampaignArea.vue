<template>
  <div>
    <div class="campaign-grid"
         >
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
import { mapState, mapActions } from '../Store';

export default {
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
