<template>
  <store-container module="CharacterSheetLayout"
                   namespaced
                   :map-state="[ 'isSidebarOpen',  'selectedAttribute']"
                   map-mutations="toggleSidebar">
    <template slot-scope="mappings">
      <slideout :open="mappings.state.isSidebarOpen"
                @update:open="mappings.mutations.toggleSidebar"
                :panel="panelSelector">
        <div>
          Painel:
          <pre>{{mappings.state.selectedAttribute}}</pre>
        </div>
      </slideout>
    </template>
  </store-container>
</template>

<script>
export default {
  props: {
    panelSelector: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>
