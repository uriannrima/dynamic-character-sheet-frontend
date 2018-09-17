<template>
  <s-header v-bind="$props">
    <flex-container>
      <slot></slot>
    </flex-container>
  </s-header>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';

import { FlexContainer } from '../pure';

class HeaderProps {
  color = VueTypes.string.def('#252121');
}

const props = new HeaderProps();

const SHeader = styled('div', props)`
  background-color: ${(props: HeaderProps) => props.color};
  height: 4rem;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

export default Vue.extend({
  components: { SHeader, FlexContainer },
  props
});
</script>
