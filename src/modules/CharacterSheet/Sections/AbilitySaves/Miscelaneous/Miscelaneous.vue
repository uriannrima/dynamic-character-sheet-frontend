<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Miscelaneous</span>
    <div class="resume-cards__body">
      <initiative :initiative="getTotalInitiative"></initiative>
      <speed :speed="speed"></speed>
    </div>
  </div>
</template>

<script>
import Initiative from './Initiative';
import Speed from './Speed';

import { mapState, mapGetters } from '@modules/CharacterSheet/Store/Character';

export default {
  components: { Initiative, Speed },
  computed: {
    ...mapState(['speed']),
    ...mapGetters(['getTotalInitiative'])
  }
};
</script>

<style>
</style>
