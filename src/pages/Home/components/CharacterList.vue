<template>
  <div class="character-card-list-component">
    <div class="character-search-container">
      <label for="name-search">Search Character by Name</label>
      <input name="name-search"
             type="text"
             v-model="searchName">
    </div>
    <transition-group name="character-card-list"
                      tag="div"
                      class="character-card-list-component">
      <slot v-for="character in filteredCharacters"
            :character="character">
      </slot>
    </transition-group>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';
import CharacterService from '@services/domain/CharacterService';

export default {
  props: ['characters'],
  data() {
    return {
      search: {
        name: ''
      }
    };
  },
  computed: {
    searchName: {
      set: debounce(function(val) {
        this.search.name = val;
      }, 500),
      get() {
        return this.search.name;
      }
    },
    filteredCharacters() {
      const { name } = this.search;
      const filterCharactersByName = character => {
        return (
          character.description.name
            .toUpperCase()
            .indexOf(name.toUpperCase()) !== -1
        );
      };
      return name
        ? this.characters.filter(filterCharactersByName)
        : this.characters;
    }
  },
  methods: {
    async removeCharacter({ character }) {
      try {
        await CharacterService.remove(character._id);
        const index = this.characters
          .map(character => character._id)
          .indexOf(character._id);
        this.characters.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.character-card-list-component {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.character-search-container {
  width: 100%;
  position: relative;
  padding: 0 15px 0;
}

.search-character {
  width: 100%;
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
