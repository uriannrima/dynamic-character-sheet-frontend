<template>
  <div class="home-component">
    <full-screen-loading :loading="loading">
      <character-card-list :characters="characters"></character-card-list>
      <v-fab-transition>
        <v-btn color="blue"
               fixed
               bottom
               right
               fab
               v-show="!loading"
               @click="$router.push({ name: 'newCharacter' })">
          <v-icon>add</v-icon>
        </v-btn>
      </v-fab-transition>
    </full-screen-loading>
  </div>
</template>
<script>
import CharacterService from 'services/character.service';
import CharacterCardList from './components/CharacterCardList';
import FullScreenLoading from 'shared/components/FullScreenLoadingComponent';

export default {
  components: { CharacterCardList, FullScreenLoading },
  data: function () {
    return {
      loading: true,
      characters: []
    };
  },
  beforeRouteEnter: async function (to, from, next) {
    next(vm => {
      vm.$vuetify.goTo(0, {
        easing: 'easeInOutCubic',
        duration: 250
      });
      CharacterService.getAll().then(characters => {
        vm.characters = characters;
        vm.loading = false;
      });
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

<style scoped>
.home-component {
  margin-bottom: 55px;
}
</style>
