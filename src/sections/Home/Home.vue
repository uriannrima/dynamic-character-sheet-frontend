<template>
  <div>
    <v-subheader>Characters</v-subheader>
    <character-card-list :characters="characters"></character-card-list>
    <v-btn color="blue"
           dark
           fixed
           bottom
           right
           fab
           @click="$router.push({ name: 'newCharacter' })">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>
<script>
import CharacterService from 'services/character.service';
import CharacterCardList from './components/CharacterCardList';

export default {
  components: { CharacterCardList },
  data: function () {
    return {
      characters: []
    };
  },
  beforeRouteEnter: async function (to, from, next) {
    var characters = await CharacterService.getAll();
    next(vm => {
      vm.characters = characters;
    });
  },
  feathers: {
    characters: {
      created(newCharacter) {
        this.characters.push(newCharacter);
      },
      updated(updatedCharacter) {
        const index = this.characters.map(character => character._id).indexOf(updatedCharacter._id);
        this.characters.splice(index, 1, updatedCharacter);
      }
    }
  }
};
</script>
