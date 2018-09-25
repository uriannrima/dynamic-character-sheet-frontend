<template>
  <avatar v-bind="$props">
    <avatar-icon class="ra"
                 v-bind="$props"
                 :class="iconName">
    </avatar-icon>
  </avatar>
</template>

<script>
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';

const props = {
  size: VueTypes.string.def('3em'),
  iconName: VueTypes.string.def('ra-ball'),
  iconColor: VueTypes.string.def('purple'),
  iconSize: VueTypes.string.def('2.6em')
};

const Avatar = styled('div', props)`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 10%;
  border: solid 1px black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarIcon = styled('i', props)`
  font-size: ${props => props.iconSize};
  color: ${props => props.iconColor};
`;

export default {
  components: { Avatar, AvatarIcon },
  props
};
</script>
