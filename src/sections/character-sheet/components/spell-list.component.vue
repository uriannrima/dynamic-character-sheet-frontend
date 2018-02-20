<script>
import SpellComponent from '../components/spell.component';

export default {
  props: ['level', 'spells'],
  components: { SpellComponent },
  data: function() {
    return {
      collapsed: false
    };
  }
}
</script>
<template>
    <div v-if="spells.length > 0" class="spell-list-container" :class="{ 'spell-list-container-collapsed' : collapsed}">
        <span @click="collapsed = !collapsed">{{level}}th: </span>
        <spell-component v-for="(spell, index) in spells" :key="index" :spell="spell" @onSpellSelected="$emit('onSpellSelected', $event)"></spell-component>
    </div>
</template>