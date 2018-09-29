<script>
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';

const props = {
  size: VueTypes.string.def('3em')
};

export default styled('div', props)`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 10%;
  border: solid 1px black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
</script>
