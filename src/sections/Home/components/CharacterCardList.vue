<template>
  <div class="character-card-list-component">
    <input type="text"
           class="search-character"
           placeholder="Search Character Name"
           v-model="search.name">
    <character-card v-for="character in filteredCharacters"
                    :key="character._id"
                    :character="character"></character-card>
  </div>
</template>

<script>
import CharacterCard from './CharacterCard';
export default {
  components: { CharacterCard },
  props: ['characters'],
  data() {
    return {
      search: {
        name: ''
      }
    }
  },
  computed: {
    filteredCharacters() {
      const { name } = this.search;
      return name ? this.characters.filter(character => character.name.indexOf(name) !== -1) : this.characters
    }
  }
}
</script>

<style>
.character-card-list-component {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.search-character {
  width: 100%;
  margin: 0 15px 0;
  text-align: center;
}
</style>
