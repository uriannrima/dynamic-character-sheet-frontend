<template>
  <div class="character-card-list-component">
    <input type="text"
           class="search-character"
           placeholder="Search Character Name"
           v-model="search.name">
    <transition-group name="character-card-list"
                      tag="div"
                      class="character-card-list-component">
      <character-card v-for="character in filteredCharacters"
                      :key="character._id"
                      :character="character"
                      class="character-card"></character-card>
    </transition-group>
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
      return name ? this.characters.filter(character => character.name.toUpperCase().indexOf(name.toUpperCase()) !== -1) : this.characters
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

/**
* Character Card List Animation
*/
.character-card {
  position: relative;
  transition: all 1s;
}

.character-card-list-enter,
.character-card-list-leave-to {
  opacity: 0;
}

.character-card-list-leave-active {
  position: absolute;
}
</style>
