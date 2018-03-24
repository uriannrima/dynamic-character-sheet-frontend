<template>
  <div class="character-card-list-component">
    <div class="character-search-container">
      <input type="text"
             class="search-character"
             placeholder="Search Character Name"
             v-model="searchName">
      <a href="#/character/">
        <span class="add-character-icon glyphicon glyphicon-plus"
              title="Create new character"></span>
      </a>
    </div>
    <transition-group name="character-card-list"
                      tag="div"
                      class="character-card-list-component">
      <character-card v-for="character in filteredCharacters"
                      :key="character._id"
                      :character="character"
                      class="character-card"
                      @onDelete="removeCharacter($event)"></character-card>
    </transition-group>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';
import CharacterCard from './CharacterCard';
import CharacterService from 'services/character.service';

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
    searchName: {
      set: debounce(function (val) {
        this.search.name = val;
      }, 500),
      get() {
        return this.search.name;
      }
    },
    filteredCharacters() {
      const { name } = this.search;
      return name ? this.characters.filter(character => character.description.name.toUpperCase().indexOf(name.toUpperCase()) !== -1) : this.characters;
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
}
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

.add-character-icon {
  position: absolute;
  right: 20px;
  top: 20%;
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
