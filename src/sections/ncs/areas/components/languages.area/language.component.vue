<template>
  <v-touch tag="span" class="language" @dblclick="onSelect(language)" v-on:doubletap="onSelect(language)">
    {{language.name}}
  </v-touch>
</template>

<script>
import OnSelectedMixin from 'Shared/mixins/on.selected.mixin';

export default {
  mixins: [OnSelectedMixin],
  props: ['language']
}
</script>

<style>
.language {
  display: inline-block;
  font-size: 16px;
  border-radius: 0.5em;
  padding: 0px 2px;
  border: solid 1px black;
  margin: 1px;
}
</style>
