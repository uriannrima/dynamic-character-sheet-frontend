<template>
  <div class="details">
    <theme-provider :theme="theme">
      <flex-container vertical>
        <dcs-text size="small">{{name}}</dcs-text>
        <dcs-text size="smaller">{{race}}</dcs-text>
        <dcs-text size="smaller">{{classes.map(classe => classe.name.charAt(0).toUpperCase() + classe.name.slice(1)).join(' / ')}}</dcs-text>
        <dcs-text size="smaller">{{classes.map(classe => `Level ${classe.level}`).join(' / ')}}</dcs-text>
      </flex-container>
    </theme-provider>
  </div>
</template>

<script>
import styled from 'vue-styled-components';

export default {
  components: { FlexContainer, ThemeProvider, DcsText },
  props: {
    name: {
      type: String,
      default: ''
    },
    race: {
      type: String,
      default: ''
    },
    classes: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    theme: {
      main: '#FFFFFF'
    }
  })
};
</script>
<style lang="scss" scoped>
.details {
  padding: 0 0.25rem;
}
</style>
