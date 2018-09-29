<script>
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';
import { withTheme } from '@/components/Theme';

const props = {
  theme: VueTypes.shape({
    header: VueTypes.shape({
      backgroundColor: VueTypes.string,
      borderColor: VueTypes.string
    })
  }).def({
    header: {
      backgroundColor: '#252121',
      borderColor: 'red'
    }
  }).loose
};

export default withTheme(styled('header', props)`
  background-color: ${props => props.theme.header.backgroundColor};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2px ${props => props.theme.header.borderColor};
  z-index: 1;
  padding: 0.25rem 0;
`);
</script>
