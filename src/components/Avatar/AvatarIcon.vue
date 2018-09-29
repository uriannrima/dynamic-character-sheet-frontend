<script>
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';

const props = {
  iconColor: VueTypes.string.def('purple'),
  iconSize: VueTypes.string.def('2.6em')
};

export default styled('i', props)`
  font-size: ${props => props.iconSize};
  color: ${props => props.iconColor};
`;
</script>
