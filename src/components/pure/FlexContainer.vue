<template>
  <flex-container v-bind="$props">
    <slot></slot>
  </flex-container>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';

class FlexContainerProps {
  vertical: boolean | any = VueTypes.bool.def(false);
  wrap: boolean | any = VueTypes.bool.def(false);
  justify: string | any = VueTypes.string;
}

const props = new FlexContainerProps();

/**
 * flex-direction: ${(props: FlexContainerProps) => props.vertical ? 'column' : 'row'};
 * ${(props: FlexContainerProps) => { return props.wrap && `flex-wrap: wrap;`; }};
 */

const FlexContainer = styled('div', props)`
  display: flex;
  ${(props: FlexContainerProps) => {
    return props.vertical && `flex-direction: column;`;
  }};
  ${(props: FlexContainerProps) => {
    return props.wrap && `flex-wrap: wrap;`;
  }};
  ${(props: FlexContainerProps) => {
    return props.justify && `justify-content: ${props.justify};`;
  }};
`;

export default Vue.extend({
  components: { FlexContainer },
  props
});
</script>
