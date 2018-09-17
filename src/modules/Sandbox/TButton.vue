<template>
  <t-button v-bind="$props">
    <slot></slot>
  </t-button>
</template>

<script lang="ts">
import Vue from 'vue';
import styled from 'vue-styled-components';
import { withTheme } from '@/components/pure/ThemeProvider';

const buttonProps = {
  theme: {
    type: Object,
    default: () => ({
      main: 'palevioletred',
      primary: 'blue'
    })
  },
  primary: {
    type: Boolean,
    default: false
  }
};

const TButton = withTheme(styled('div', buttonProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  ${(props: any) => {
    console.log(props);
  }}
  color: ${(props: any) =>
    props.primary ? props.theme.primary : props.theme.main};
  border: 2px solid
    ${(props: any) => (props.primary ? props.theme.primary : props.theme.main)};
`);

export default Vue.extend({
  components: { TButton },
  props: {
    primary: Boolean
  }
});
</script>
