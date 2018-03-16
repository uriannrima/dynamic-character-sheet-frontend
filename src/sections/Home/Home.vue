<template>
  <div>
    <h1>{{title}}</h1>
    <character-card-list :characters="characters"></character-card-list>
  </div>
</template>
<script>
import CharacterService from 'services/character.service';
import CharacterCardList from './components/CharacterCardList'

export default {
  components: { CharacterCardList },
  data: function () {
    return {
      title: 'Home',
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