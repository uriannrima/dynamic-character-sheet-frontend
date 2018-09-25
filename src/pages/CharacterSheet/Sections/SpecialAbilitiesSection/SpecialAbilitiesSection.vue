<template>
  <sheet-section>
    <special-abilities :special-abilities="specialAbilities"></special-abilities>
  </sheet-section>
</template>

<script>
import SheetSection from '@/components/SheetSection';

import SpecialAbilities from './SpecialAbilities';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { SheetSection, SpecialAbilities },
  computed: {
    ...mapState(['specialAbilities'])
  }
};
</script>

<style>
</style>
