<template>
  <resume-card thinner
               @click="select"
               :attention="attention">
    <span slot="header">{{name}}</span>
    <template>
      <span>
        {{ total + keyAbilityScore.modifier | signed }}
      </span>
      <small>({{total}})</small>
    </template>
  </resume-card>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    keyAbilityScore: {
      type: Object,
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
      this.$emit(
        'select',
        this.$getMetaEvent($event, {
          selected: this.name,
          type: 'savingThrow'
        })
      );
    }
  }
};
</script>

<style>
</style>
