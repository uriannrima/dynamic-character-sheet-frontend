<template>
  <div class="sheet">
    <sheet-header ref="sheetHeader">
      <slot name="header"></slot>
    </sheet-header>
    <section-wrapper :padding-top="headerHeight">
      <sheet-section>
        <slot></slot>
      </sheet-section>
    </section-wrapper>
  </div>
</template>

<script>
import styled from 'vue-styled-components';
import SheetHeader from './SheetHeader.vue';
import SheetSection from './SheetSection.vue';

const props = {
  paddingTop: {
    type: Number,
    default: 0
  }
};

const SectionWrapper = styled('div', props)`
  padding-top: ${props => props.paddingTop}px;
`;

export default {
  components: { SheetHeader, SectionWrapper, SheetSection },
  data: () => ({
    headerHeight: 0
  }),
  mounted() {
    this.headerHeight = this.$refs.sheetHeader.$el.clientHeight;
  }
};
</script>
<style lang="scss" scoped>
</style>
