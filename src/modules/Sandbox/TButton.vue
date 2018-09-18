<script lang="ts">
import styled from 'vue-styled-components';
import { withTheme } from '@/components/pure/ThemeProvider';

const buttonProps = {
  theme: {
    type: Object,
    default: () => ({
      main: 'palevioletred',
      primary: 'orange'
    })
  },
  primary: {
    type: Boolean,
    default: false
  }
};

export default withTheme(styled('div', buttonProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props: any) =>
    props.primary ? props.theme.primary : props.theme.main};
  border: 2px solid
    ${(props: any) => (props.primary ? props.theme.primary : props.theme.main)};
`);
</script>
