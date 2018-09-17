<template>
  <flex-container vertical>
    <s-text bold
            size="big">{{name}}</s-text>
    <s-text size="smaller">{{race}} (HD {{getHD}})</s-text>
    <character-classes :classes="classes"></character-classes>
  </flex-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import VueTypes from 'vue-types';

import { FlexContainer, SText } from '../pure';
import { CharacterClasses } from './';

import { Classe } from '@domain';

export default Vue.extend({
  components: { FlexContainer, SText, CharacterClasses },
  props: {
    name: VueTypes.string.isRequired,
    race: VueTypes.string.isRequired,
    classes: VueTypes.arrayOf(
      VueTypes.shape({
        name: VueTypes.string.isRequired,
        level: VueTypes.number.isRequired
      })
    ).isRequired as PropOptions<Classe[]>
  },
  computed: {
    getHD(): number {
      return this.classes.reduce((acc, classe) => acc + classe.level, 0);
    }
  }
});
</script>
