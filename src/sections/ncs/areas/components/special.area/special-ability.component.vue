<template>
  <span class="special-ability" :title="specialAbility.description">
    {{specialAbility.name}}
  </span>
</template>

<script>
export default {
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
