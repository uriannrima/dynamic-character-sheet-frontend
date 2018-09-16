<template>
  <div class="Sandbox">
    <div class="Header">
      <flex-container>
        <avatar class="Avatar"
                avatar-size="3em"
                icon-size="2.8em"></avatar>
        <character-details name="Uriann"
                           race="Half-elf"
                           :classes="[{name: 'Wizard', level: 1}]">
        </character-details>
      </flex-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Avatar, FlexContainer } from '@/components/pure';
import { CharacterDetails } from '@/components/character';
export default Vue.extend({
  components: { Avatar, FlexContainer, CharacterDetails }
});
</script>

<style lang="scss" scoped>
.Header {
  padding: 0.5rem;
  .Avatar {
    margin-right: 0.5rem;
  }
}
</style>
