<script>
/* import { mapActions, mapGetters, mapMutations  } from 'vuex'; */
import CharacterService from 'services/character.service';

export default {
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
      }
    }
  }
  /*
      computed: {
          ...mapGetters([
              'items',
              'saleProducts'
          ])
      },
      methods: {
           You can also use ...mapMuttations(['methodName'])
           But let's stick to what is considered best practice.
          ...mapActions([
              'reducePrice'
          ])
      }
      */
};
</script>
<template>
  <!-- div>
        <h1> {{title}}</h1>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{item.name}} - {{item.price}}
            </li>
            <li v-for="(item, index) in saleProducts" :key="index">
                {{item.name}} - {{item.price}}
            </li>
        </ul>
        <button @click="reducePrice({amount: 4})">Reduce</button>
    </div -->
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="character in characters"
          :key="character.id">
        <a :href="'#/character/' + character._id">{{character.name}}</a>
      </li>
    </ul>
  </div>
</template>