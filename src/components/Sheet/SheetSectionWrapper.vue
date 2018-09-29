<script>
import styled from 'vue-styled-components';

const props = {
  paddingTop: {
    type: Number,
    default: 0
  }
};

export default styled('div', props)`
  padding-top: ${props => props.paddingTop}px;
`;
</script>
