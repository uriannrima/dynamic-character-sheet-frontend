<template>
  <div class="sheet">
    <sheet-header :icon-name="iconName"
                  :icon-color="iconColor">
    </sheet-header>
    <slot></slot>
  </div>
</template>

<script>
import { SheetHeader } from './SheetHeader';

export default {
  components: { SheetHeader },
  props: {
    iconName: {
      type: String,
      default: 'ra-ball'
    },
    iconColor: {
      type: String,
      default: 'purple'
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.sheet {
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  box-shadow: rgb(136, 136, 136) 0 0px 10px;
}
</style>
