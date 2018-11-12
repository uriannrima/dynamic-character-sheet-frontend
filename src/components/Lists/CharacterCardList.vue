<template>
  <list :items="characters">
    <template slot-scope="{ item: character }">
      <character-card :key="character._id"
                      :character="character">
      </character-card>
    </template>
  </list>
</template>

<script>
export default {
  props: ['characters']
};
</script>

<style>
</style>
