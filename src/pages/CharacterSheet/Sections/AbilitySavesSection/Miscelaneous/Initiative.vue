<template>
  <resume-card @click="emitSelect($event, 'initiative', 'miscelaneous')">
    <span slot="header">Initiative</span>
    <template>
      <span>{{initiative | signed}}</span>
    </template>
  </resume-card>
</template>

<script>
import { SelectableMixin } from '@/mixins/components';

export default {
  mixins: [SelectableMixin],
  props: {
    initiative: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
