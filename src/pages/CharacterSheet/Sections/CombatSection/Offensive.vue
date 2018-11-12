<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Offensive</span>
    <div class="resume-cards__body">
      <resume-card>
        <span slot="header">Base Attack Bonus</span>
        <span>{{ baseAttackBonus }}</span>
      </resume-card>
      <resume-card>
        <span slot="header">Grapple</span>
        <span>{{ grapple }}</span>
      </resume-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseAttackBonus: {
      type: Number,
      default: 0
    },
    grapple: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>

<style>
</style>
