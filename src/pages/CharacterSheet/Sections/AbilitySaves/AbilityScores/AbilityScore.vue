<template>
  <resume-card thinner
               @click="select"
               :attention="attention">
    <span slot="header">{{name.substring(0,3)}}</span>
    <template>
      <span>
        {{modifier | signed }}
      </span>
      <small>({{total}})</small>
    </template>
  </resume-card>
</template>

<script>
import { ResumeCard } from '@/components/ResumeCards';

export default {
  components: { ResumeCard },
  props: {
    name: {
      type: String,
      required: true
    },
    modifier: {
      type: null
    },
    total: {
      type: Number,
      required: true
    },
    modifiers: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    attention() {
      return this.modifiers.filter(modifier => modifier.temporary).length >= 1;
    }
  },
  methods: {
    select($event) {
      this.$emit('select', Object.assign($event, { abilityScore: this.name }));
    }
  }
};
</script>

<style>
</style>
