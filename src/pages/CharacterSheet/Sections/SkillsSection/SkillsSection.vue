<template>
  <div class="skills-section">
    <skills :skills="skills"
            :ability-scores="abilityScores"></skills>
  </div>
</template>

<script>
import Skills from './Skills';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { Skills },
  computed: {
    ...mapState(['skills', 'abilityScores'])
  }
};
</script>
<style lang="scss" scoped>
.skills-section {
}
</style>
