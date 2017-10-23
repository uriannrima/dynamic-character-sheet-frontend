<script>
export default {
    props: ['feat'],
    computed: {
        featType: function() {
            return 'feat-' + this.feat.type.toLowerCase().replace(' ', '-');
        },
        getFeatTooltip: function() {
            var tooltip = '';
            tooltip += this.feat.title + ' [' + this.feat.type + ']';

            if (this.feat.prerequisite) tooltip += '\n\nPrerequisite: ' + this.feat.prerequisite;
            if (this.feat.benefit) tooltip += '\n\nBenefit: ' + this.feat.benefit;
            if (this.feat.normal) tooltip += '\n\nNormal: ' + this.feat.normal;
            if (this.feat.special) tooltip += '\n\nSpecial: ' + this.feat.special;

            return tooltip;
        }
    },
    methods: {
    }
}
</script>
<template>
    <span class="feat" :class="featType" :title="getFeatTooltip" @click="$emit('onFeatSelected', feat)">
        {{feat.title}}
        <small v-if="feat.hasSubValue">({{feat.subValue.value}})</small>
    </span>
</template>