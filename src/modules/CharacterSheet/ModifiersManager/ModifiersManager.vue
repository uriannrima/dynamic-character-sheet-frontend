<template>
  <div class="modifiers-manager">
    <modifier v-if="base"
              :modifier="{ name:'Base', value: base }"></modifier>
    <modifier v-for="(modifier, $index) in modifiers"
              :key="$index"
              :modifier="modifier"
              colorize
              @remove="remove($index)">
    </modifier>
    <add-modifier @add="add">
    </add-modifier>
  </div>
</template>

<script>
import Modifier from './Modifier';
import AddModifier from './AddModifier';

export default {
  components: { Modifier, AddModifier },
  props: {
    base: {
      type: Number,
      default: 0
    },
    modifiers: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    addedModifier: {
      name: '',
      value: 0,
      temporary: true
    }
  }),
  methods: {
    add(modifier) {
      this.$emit('add', modifier);
    },
    remove($index) {
      this.$emit('remove', $index);
    }
  }
};
</script>

<style lang="scss">
.modifiers-manager {
  display: table;
  width: 100%;
  font-size: 14px;
}
</style>
