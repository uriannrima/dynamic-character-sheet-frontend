<template>
  <div class="sheet">
    <sheet-header ref="sheetHeader">
      <slot name="header"></slot>
    </sheet-header>
    <sheet-section-wrapper :padding-top="headerHeight">
      <sheet-section>
        <slot></slot>
      </sheet-section>
    </sheet-section-wrapper>
  </div>
</template>

<script>
export default {
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
