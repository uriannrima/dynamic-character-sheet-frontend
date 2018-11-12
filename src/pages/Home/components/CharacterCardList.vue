<template>
  <characters-list :characters="characters">
    <template slot-scope="{ character }">
      <character-card :key="character._id"
                      :character="character">
      </character-card>
    </template>
  </characters-list>
</template>

<script>
import CharacterCard from './CharacterCard.vue';
import CharactersList from './CharacterList.vue';

export default {
  components: { CharactersList, CharacterCard },
  props: ['characters']
};
</script>

<style scoped lang="scss">

</style>
