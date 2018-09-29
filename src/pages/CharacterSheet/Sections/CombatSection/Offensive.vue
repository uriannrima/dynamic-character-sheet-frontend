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
import { ResumeCard } from '@/components/ResumeCards';

export default {
  components: { ResumeCard },
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
