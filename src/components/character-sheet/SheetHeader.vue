<template>
  <s-header>
    <avatar class="Avatar"
            avatar-size="3em"
            icon-size="2.8em"></avatar>
    <character-details name="Uriann"
                       race="Half-Elf"
                       :classes="[{name: 'Wizard', level: 3}, {name: 'M. Specialist', level: 3}]">
    </character-details>
  </s-header>
</template>

<script lang="ts">
import Vue from 'vue';

import { SHeader } from '../structure';
import { Avatar } from '../pure';
import { CharacterDetails } from '../character-sheet';

export default Vue.extend({
  components: { SHeader, Avatar, CharacterDetails }
});
</script>
