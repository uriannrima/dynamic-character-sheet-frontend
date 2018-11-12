<template>
  <card>
    <span slot="header">{{character.description.name}}</span>
    <div>
      <div class="character-classes">
        <small v-for="(classe, $index) in classes"
              :key="$index">{{classe}}</small>
      </div>
      <div class="character-ability-scores">

      </div>
    </div>
  </card>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  computed: {
    classes() {
      return this.character.classes.map(
        classe => `${classe.name}(${classe.level})`
      );
    }
  }
};
</script>

<style>
</style>
