<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Special Attributes</span>
    <div class="resume-cards__body">
      <resume-card>
        <span slot="header">Spell Resistance</span>
        <span>{{ spellResistance }}</span>
      </resume-card>
      <resume-card>
        <span slot="header">Damage Reduction</span>
        <span>{{ damageReduction }}</span>
      </resume-card>
    </div>
  </div>
</template>

<script>
import { ResumeCard } from '@/components/ResumeCards';

export default {
  components: { ResumeCard },
  props: {
    spellResistance: {
      type: [String, Number],
      default: 0
    },
    damageReduction: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>

<style>
</style>
