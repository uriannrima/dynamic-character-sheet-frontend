<template>
  <div>
    <h1>{{title}}</h1>
    <modal :showModal.sync="showModal">
      <div slot-scope="{ actions: { close } }">
        <button @click="close">Close</button>
      </div>
    </modal>
    <character-card-list :characters="characters"></character-card-list>
  </div>
</template>
<script>
import CharacterService from 'services/character.service';
import CharacterCardList from './components/CharacterCardList';
import Modal from 'shared/components/ModalComponent';

export default {
  components: { CharacterCardList, Modal },
  data: function () {
    return {
      title: 'Home',
      characters: [],
      showModal: true
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
