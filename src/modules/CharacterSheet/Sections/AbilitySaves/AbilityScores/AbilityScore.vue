<template>
  <resume-card thinner>
    <span slot="header">{{name.substring(0,3)}}</span>
    <template>
      <span>
        {{tempModifier | signed }}
      </span>
      <small>({{tempValue}})</small>
    </template>
  </resume-card>
</template>

<script>
import { ResumeCard } from 'shared/components/ResumeCards';

export default {
  components: { ResumeCard },
  props: {
    name: {
      type: String,
      required: true
    },
    tempModifier: {
      type: null
    },
    tempValue: {
      type: Number,
      required: true
    }
  }
};
</script>

<style>
</style>
