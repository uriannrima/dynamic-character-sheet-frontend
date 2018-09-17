<template>
  <s-text v-bind="$props">
    <slot></slot>
  </s-text>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';
import { Theme, ITheme, getTheme } from './Theme';

class STextProps {
  theme: ITheme | any = Theme;
  size: string | any = VueTypes.string;
  bold: boolean | any = VueTypes.bool.def(false);
  italic: boolean | any = VueTypes.bool.def(false);

  secondary: boolean | any = VueTypes.bool.def(false);
  success: boolean | any = VueTypes.bool.def(false);
  failure: boolean | any = VueTypes.bool.def(false);
  disabled: boolean | any = VueTypes.bool.def(false);
  attention: boolean | any = VueTypes.bool.def(false);
}

const props = new STextProps();

const SText = styled('span', props)`
  ${(props: STextProps) => {
    const theme = getTheme(props);
    var color = theme.text.primary;

    if (props.secondary) color = theme.text.secondary;
    if (props.success) color = theme.text.success;
    if (props.failure) color = theme.text.failure;
    if (props.disabled) color = theme.text.disabled;
    if (props.attention) color = theme.text.attention;

    return `color: ${color}`;
  }};

  ${(props: STextProps) => props.bold && 'font-weight: bold;'};
  ${(props: STextProps) => props.italic && 'font-style: italic;'};
  ${(props: STextProps) => {
    var size = '1rem';
    switch (props.size) {
      case 'biggest':
        size = '1.8';
        break;
      case 'bigger':
        size = '1.4';
        break;
      case 'big':
        size = '1.2';
        break;
      case 'small':
        size = '0.8';
        break;
      case 'smaller':
        size = '0.6';
        break;
      case 'smallest':
        size = '0.4';
        break;
    }
    return `font-size: ${size}rem;`;
  }};
`;

export default Vue.extend({
  components: { SText },
  props
});
</script>
