<template>
  <theme-provider :theme="theme">
    <flex-container vertical>
      <dcs-text>{{name}}</dcs-text>
      <dcs-text size="small">{{race}}</dcs-text>
      <dcs-text size="small">{{classes.map(classe => classe.name.charAt(0).toUpperCase() + classe.name.slice(1)).join(' / ')}}</dcs-text>
      <dcs-text size="smaller">{{classes.map(classe => `Level ${classe.level}`).join(' / ')}}</dcs-text>
    </flex-container>
  </theme-provider>
</template>

<script>
import styled from 'vue-styled-components';
import FlexContainer from '@/components/FlexContainer';
import { ThemeProvider } from '@/components/Theme';
import DcsText from '@/components/DcsText';

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
