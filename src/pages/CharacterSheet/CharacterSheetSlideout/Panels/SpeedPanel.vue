<template>
  <store-container module="CharacterSheet/Character"
                   namespaced
                   :map-state="['speed']">
    <template slot-scope="mappings">
      <base-panel title="Speed"
                  :sub-title="mappings.state.speed"
                  :description="selected.description">
      </base-panel>
    </template>
  </store-container>
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
