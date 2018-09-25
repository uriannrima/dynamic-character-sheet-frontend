<template>
  <sheet-section>
    <skills :skills="skills"
            :ability-scores="abilityScores"></skills>
  </sheet-section>
</template>

<script>
import SheetSection from '@/components/SheetSection';
import Skills from './Skills';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { SheetSection, Skills },
  computed: {
    ...mapState(['skills', 'abilityScores'])
  }
};
</script>

<style>
</style>
