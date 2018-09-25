<script lang="ts">
import Vue from 'vue';
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';
import { Theme, ITheme, withTheme } from './Theme';

class STextProps {
  size: string | any = VueTypes.string;
  bold: boolean | any = VueTypes.bool.def(false);
  italic: boolean | any = VueTypes.bool.def(false);
  /** Theme */
  theme: ITheme | any = Theme;
  primary: boolean | any = VueTypes.bool.def(false);
  secondary: boolean | any = VueTypes.bool.def(false);
  failure: boolean | any = VueTypes.bool.def(false);
  disabled: boolean | any = VueTypes.bool.def(false);
  attention: boolean | any = VueTypes.bool.def(false);
}

const props = new STextProps();

const DcsText = styled('span', props)`
  ${(props: STextProps) => {
    const { theme }: { theme: ITheme } = props;

    var color = theme.main;
    if (props.primary) color = theme.primary;
    if (props.secondary) color = theme.secondary;
    if (props.failure) color = theme.failure;
    if (props.disabled) color = theme.disabled;
    if (props.attention) color = theme.attention;

    return `color: ${color}`;
  }};
  ${(props: STextProps) => props.bold && 'font-weight: bold;'};
  ${(props: STextProps) => props.italic && 'font-style: italic;'};
  ${(props: STextProps) => {
    var size = '1';
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

export default withTheme(DcsText);
</script>
