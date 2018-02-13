<template>
  <span class="feat" :class="featType" :title="featTooltip" @dblclick="selectFeat">
    {{feat.title}}
    <small v-if="feat.hasSubValue">({{feat.subValue.value}})</small>
  </span>
</template>

<script>
export default {
  props: ['feat'],
  computed: {
    featType: function () {
      return 'feat-' + this.feat.type.toLowerCase().replace(' ', '-');
    },
    featTooltip: function () {
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
    selectFeat: function () {
      var { feat } = this;
      this.$emit('onSelected', { feat });
    }
  }
}
</script>

<style>
.feat {
  display: inline-block;
  font-size: 16px;
  border-radius: 0.5em;
  padding: 0px 2px;
  border: solid 1px black;
  margin: 1px;
}

.feat-general {
  background-color: rgba(211, 211, 211, 0.4);
}

.feat-item-creation {
  background-color: rgba(165, 42, 42, 0.4);
}

.feat-metamagic {
  background-color: rgba(30, 144, 255, 0.4);
}

.feat-reserve {
  background-color: rgba(144, 238, 144, 0.4);
}
</style>
