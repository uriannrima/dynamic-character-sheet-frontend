<template>
  <flex-container vertical>
    <s-text bold
            size="big">{{name}}</s-text>
    <s-text size="smaller">{{race}}</s-text>
    <s-text size="smaller"
            v-for="(classe, $index) in classes"
            :key="$index">{{classe.name}} ({{classe.level}})</s-text>
  </flex-container>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTypes from 'vue-types';

import { FlexContainer, SText } from '../pure';

export default Vue.extend({
  components: { FlexContainer, SText },
  props: {
    name: VueTypes.string.isRequired,
    race: VueTypes.string.isRequired,
    classes: VueTypes.arrayOf(
      VueTypes.shape({
        name: VueTypes.string.isRequired,
        level: VueTypes.number.isRequired
      })
    ).isRequired
  }
});
</script>
