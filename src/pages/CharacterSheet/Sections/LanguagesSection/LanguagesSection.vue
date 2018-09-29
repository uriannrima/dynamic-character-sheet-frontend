<template>
  <div class="languages-section">
    <languages :languages="languages"></languages>
  </div>
</template>

<script>
import Languages from './Languages';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { Languages },
  computed: {
    ...mapState(['languages'])
  }
};
</script>

<style lang="scss" scoped>
.languages-section {
}
</style>
