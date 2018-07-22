<template>
  <div class="home-component">
    <full-screen-loading :loading="loading">
      <character-card-list :characters="characters"></character-card-list>
      <button>+</button>
    </full-screen-loading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Route, Next } from 'vue-router';

import { Character } from 'domain/character';
import CharacterService from 'services/character.service';

import CharacterCardList from './components/CharacterCardList.vue';
import FullScreenLoading from 'shared/components/FullScreenLoadingComponent.vue';

@Component({ components: { CharacterCardList, FullScreenLoading } })
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
