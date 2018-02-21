<template>
  <div>
    <div v-if="spells.length > 0" class="spells-group-container">
      <span>{{group}}: </span>
      <spell-component v-for="(spell, index) in spells" :key="index" :spell="spell" @onSelected="onSelect($event.model)"></spell-component>
    </div>
  </div>
</template>

<script>
import OnSelectedMixin from 'Shared/mixins/methods/on.selected.mixin';
import SpellComponent from './spell.component';
export default {
  mixins: [OnSelectedMixin],
  components: { SpellComponent },
  props: ['group', 'spells']
}
</script>

<style>
.spells-group-container {
  overflow: hidden;
  background-color: rgba(211, 211, 211, 0.4);
  border: solid 1px black;
  padding: 2px;
  border-radius: 0.5em;
  margin-top: 5px;
}
</style>
