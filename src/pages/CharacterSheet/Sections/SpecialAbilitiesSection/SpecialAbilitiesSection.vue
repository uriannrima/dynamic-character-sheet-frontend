<template>
  <div class="special-abilities-section">
    <special-abilities :special-abilities="specialAbilities"></special-abilities>
  </div>
</template>

<script>
import SpecialAbilities from './SpecialAbilities';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { SpecialAbilities },
  computed: {
    ...mapState(['specialAbilities'])
  }
};
</script>

<style lang="scss" scoped>
.special-abilities-section {
}
</style>
