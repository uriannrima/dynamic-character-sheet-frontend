<template>
  <list :items="characters"
        class="character-card-list">
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
.character-card-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-auto-rows: 1fr; */
  grid-gap: 5px;
}
</style>
