<template>
  <resume-card @click="emitSelect($event, 'speed', 'miscelaneous')">
    <span slot="header">Speed</span>
    <template>
      <span>{{ speed }}</span>
    </template>
  </resume-card>
</template>

<script>
import { SelectableMixin } from '@/mixins/components';

export default {
  mixins: [SelectableMixin],
  props: {
    speed: {
      type: [String, Number],
      default: 0
    }
  }
};
</script>

<style>
</style>
