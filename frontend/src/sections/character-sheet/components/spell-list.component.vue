<script>
import SpellComponent from '../components/spell.component';

export default {
    props: ['spellList'],
    components: { SpellComponent },
    data: function() {
        return {
            collapsed: false
        };
    }
}
</script>
<template>
    <div v-if="spellList.spells.length > 0" class="spell-list-container" :class="{ 'spell-list-container-collapsed' : collapsed}">
        <span @click="collapsed = !collapsed">{{spellList.level}}th: </span>
        <spell-component v-for="spell in spellList.spells" :key="spell" :spell="spell" @onSpellSelected="$emit('onSpellSelected', $event)"></spell-component>
    </div>
</template>