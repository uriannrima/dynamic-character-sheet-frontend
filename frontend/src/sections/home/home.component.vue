<script>
import CharacterService from 'Services/character.service';
export default {
    data: function() {
        return {
            title: 'Home',
            characters: []
        }
    },
    beforeRouteEnter(to, from, next) {
        CharacterService.getAll().then(data => {
            next(vm => {
                vm.characters = data;
            });
        });
    }
}
</script>
<template>
    <div>
        <h1> {{title}}</h1>
        <ul>
            <li v-for="character in characters" :key="character.id"><a :href="'#/character/' + character._id">{{character.name}}</a></li>
        </ul>
    </div>
</template>