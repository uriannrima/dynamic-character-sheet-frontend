<script>
 /*, mapMutations */
import { mapActions, mapGetters } from 'vuex';

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
        /** 
         * You can also use ...mapMuttations(['methodName'])
         * But let's stick to what is considered best practice.
        */
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
        <button @click="reducePrice({amount: 4})">Reduce</button>
    </div>
</template>