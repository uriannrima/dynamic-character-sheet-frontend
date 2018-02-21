<template>
  <div class="dc-area">
    <spell-save-component></spell-save-component>
    <arcane-spell-failure-component></arcane-spell-failure-component>
  </div>
</template>

<script>
import SpellSaveComponent from './components/dc.area/spell-save.component';
import ArcaneSpellFailureComponent from './components/dc.area/arcane-spell-failure.component';

export default {
  components: { SpellSaveComponent, ArcaneSpellFailureComponent }
}
</script>

<style>

</style>
