<script>
import styled from 'vue-styled-components';
import { withTheme, Theme } from './Theme';

const props = {
  primary: {
    type: Boolean,
    default: false
  },
  theme: Theme
};

const BaseButton = styled('div')`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const Button = styled(BaseButton, props)`
  ${props => {
    const { theme, primary } = props;
    const { text } = theme;
    let color = text.main;
    if (primary) color = text.primary;
    return `
      color: ${color};
      border: 2px solid ${color};
    `;
  }};
`;

export default withTheme(Button);
</script>
