<script>
export default {
    props: ['spell'],
    computed: {
        spellSchool: function() {
            return 'spell-' + this.spell.school.name.toLowerCase().replace(' ', '-');
        },
        spellTooltip: function() {
            var tooltip = '';
            tooltip += this.spell.name + ' [' + this.spell.school.name + ']';
            tooltip += '\n\nLevel: ' + this.spell.level;

            return tooltip;
        }
    }
}
</script>
<template>
    <span class="spell" :class="spellSchool" :title="spellTooltip" @click="$emit('onSpellSelected', spell)">
        {{spell.name}}</span>
</template>