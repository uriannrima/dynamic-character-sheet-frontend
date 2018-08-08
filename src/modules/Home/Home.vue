<template>
  <div class="home-component">
    <loading-component :loading="loading">
      <character-card-list :characters="characters"></character-card-list>
      <button>+</button>
    </loading-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Route, Next } from 'vue-router';

import { Character } from 'domain/character';
import CharacterService from 'services/character.service';

import CharacterCardList from './components/CharacterCardList.vue';
import LoadingComponent from 'shared/components/LoadingComponent.vue';

@Component({ components: { CharacterCardList, LoadingComponent } })
export default class Home extends Vue {
  loading: boolean = false;
  characters: Character[] = [];

  async beforeRouteEnter(_1: Route, _2: Route, next: Next<Home>) {
    next(async vm => {
      vm.loading = true;
      const chars = (await CharacterService.getAll()) as Character[];
      vm.characters = chars;
      vm.loading = false;
    });
  }
}
</script>

<style scoped>
.home-component {
  margin-bottom: 55px;
}
</style>
