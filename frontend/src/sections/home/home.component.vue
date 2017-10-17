<script>
import { mapActions, mapGetters } from 'vuex';
import CharacterService from 'Services/character.service';
export default {
    data: function() {
        return {
            title: 'Home',
            characters: []
        }
    },
    // beforeRouteEnter: async function(to, from, next) {
    //     // var characters = await CharacterService.getAll();
    //     // next(vm => {
    //     //     vm.characters = characters;
    //     // });
    // },
    computed: {
        ...mapGetters([
            'items',
            'saleProducts'
        ])
    },
    methods: {
        ...mapActions([
            'reducePrice'
        ])
    }
}
</script>
<template>
    <div>
        <h1> {{title}}</h1>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{item.name}} - {{item.price}}
            </li>
            <li v-for="(item, index) in saleProducts" :key="index">
                {{item.name}} - {{item.price}}
            </li>
        </ul>
        <button @click="reducePrice(4)">Reduce</button>
    </div>
</template>