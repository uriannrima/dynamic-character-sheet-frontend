<template>
  <s-text size="smaller">{{getClasses}}</s-text>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTypes from 'vue-types';

import { SText } from '../pure';

export default Vue.extend({
  components: { SText },
  props: {
    classes: VueTypes.arrayOf(
      VueTypes.shape({
        name: VueTypes.string.isRequired,
        level: VueTypes.number.isRequired
      })
    ).isRequired
  },
  computed: {
    getClasses(): string {
      const concatClasses = (reducer: string, classe: string) => reducer === '' ? classe : reducer + ', ' + classe;
      return this.classes
        .map(classe => `${classe.name} (${classe.level})`)
        .reduce(concatClasses, '');
    }
  }
});
</script>
