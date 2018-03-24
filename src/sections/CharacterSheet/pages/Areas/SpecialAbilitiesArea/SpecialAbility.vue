<template>
  <v-touch tag="span"
           class="special-ability"
           v-on:tap="onSelect(specialAbility)">
    {{specialAbility.name}}
    <small v-if="specialAbility.subValues[0]">({{specialAbility.subValues[0].value}})</small>
  </v-touch>
</template>

<script>
import OnSelectedMixin from 'shared/mixins/methods/on.selected.mixin';

export default {
  mixins: [OnSelectedMixin],
  props: ['specialAbility']
}
</script>

<style>
.special-ability {
  display: inline-block;
  font-size: 16px;
  border-radius: 0.5em;
  padding: 0px 2px;
  border: solid 1px black;
  margin: 1px;
}
</style>
