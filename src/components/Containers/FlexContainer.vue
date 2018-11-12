<script lang="ts">
import Vue from 'vue';
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';

class FlexContainerProps {
  vertical: boolean | any = VueTypes.bool.def(false);
  wrap: boolean | any = VueTypes.bool.def(false);
  justify: string | any = VueTypes.string;
  align: string | any = VueTypes.string;
}

const props = new FlexContainerProps();

/**
 * flex-direction: ${(props: FlexContainerProps) => props.vertical ? 'column' : 'row'};
 * ${(props: FlexContainerProps) => { return props.wrap && `flex-wrap: wrap;`; }};
 */
export default styled('div', props)`
  display: flex;
  flex: 1;
  ${(props: FlexContainerProps) => {
    return props.vertical && `flex-direction: column;`;
  }};
  ${(props: FlexContainerProps) => {
    return props.wrap && `flex-wrap: wrap;`;
  }};
  ${(props: FlexContainerProps) => {
    return props.justify && `justify-content: ${props.justify};`;
  }};
  ${(props: FlexContainerProps) => {
    return props.align && `align-items: ${props.align};`;
  }};
`;
</script>
