<template>
  <store-container module="Character"
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

import StoreContainer from '@/store/components/StoreContainer';

export default {
  components: { StoreContainer, Initiative, Speed }
};
</script>

<style>
</style>
