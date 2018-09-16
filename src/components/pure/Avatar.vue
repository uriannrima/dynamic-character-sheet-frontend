<template>
  <avatar v-bind="$props">
    <avatar-icon class="ra"
                 v-bind="$props"
                 :class="iconName">
    </avatar-icon>
  </avatar>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTypes from 'vue-types';
import styled from 'vue-styled-components';

class AvatarProps {
  avatarSize = VueTypes.string.def('2rem');
  iconName = VueTypes.string.def('ra-ball');
  iconColor = VueTypes.string.def('purple');
  iconSize = VueTypes.string.def('2rem');
}

const props = new AvatarProps();

const Avatar = styled('div', props)`
  width: ${(props: AvatarProps) => props.avatarSize};
  height: ${(props: AvatarProps) => props.avatarSize};
  border-radius: 10%;
  border: solid 1px black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarIcon = styled('i', props)`
  font-size: ${(props: AvatarProps) => props.iconSize};
  color: ${(props: AvatarProps) => props.iconColor};
`;

export default Vue.extend({
  components: { Avatar, AvatarIcon },
  props
});
</script>
