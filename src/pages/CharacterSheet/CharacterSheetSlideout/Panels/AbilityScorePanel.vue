<template>
  <!-- <pre>
  {{selected}}
</pre> -->
  <base-panel :title="selected.name"
              :modifier="selected.total"
              :snippet="selected.snippet"
              :description="selected.description"
              manageable
              :base="selected.base"
              :modifiers="selected.modifiers">
  </base-panel>
</template>

<script>
import BasePanel from './BasePanel.vue';
export default {
  components: { BasePanel },
  props: {
    selected: Object
  }
};
</script>

<style>
</style>
