<template>
  <div class="home-component">
    <loading :loading="loading">
      <character-card-list :characters="characters"></character-card-list>
    </loading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Route, Next } from 'vue-router';

import { Character } from '@domain/character';
import CharacterService from '@services/domain/CharacterService';

@Component({})
export default class Home extends Vue {
  loading: boolean = false;
  characters: Character[] = [];

  async beforeRouteEnter(_1: Route, _2: Route, next: Next<Home>) {
    next(async vm => {
      vm.loading = true;
      vm.characters = (await CharacterService.getAll()) as Character[];
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
