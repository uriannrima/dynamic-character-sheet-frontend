<template>
  <resume-card thinner>
    <span slot="header">{{savingThrow.name}}</span>
    <template>
      <span>
        {{total| signed }}
      </span>
    </template>
  </resume-card>
</template>

<script>
import { ResumeCard } from 'shared/components/ResumeCards';

export default {
  components: { ResumeCard },
  props: {
    savingThrow: {
      type: Object,
      required: true
    },
    keyAbilityScore: {
      type: Object,
      required: true
    }
  },
  computed: {
    total() {
      return this.savingThrow.total + this.keyAbilityScore.tempModifier;
    }
  }
};
</script>

<style>
</style>
