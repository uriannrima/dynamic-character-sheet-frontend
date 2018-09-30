<template>
  <store-container module="CharacterSheet/Character"
                   namespaced
                   :map-state="['speed']"
                   :map-getters="['getTotalInitiative']">
    <div class="resume-cards"
         slot-scope="mappings">
      <span class="resume-cards__header">Miscelaneous</span>
      <div class="resume-cards__body">
        <initiative :initiative="mappings.getters.getTotalInitiative"
                    v-on="$listeners">
        </initiative>
        <speed :speed="mappings.state.speed"
               v-on="$listeners">
        </speed>
      </div>
    </div>
  </store-container>

</template>

<script>
import Initiative from './Initiative';
import Speed from './Speed';

export default {
  components: { Initiative, Speed }
};
</script>

<style>
</style>
