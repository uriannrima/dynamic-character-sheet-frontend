<template>
  <sheet-section>
    <languages :languages="languages"></languages>
  </sheet-section>
</template>

<script>
import SheetSection from '@/components/SheetSection';

import Languages from './Languages';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { SheetSection, Languages },
  computed: {
    ...mapState(['languages'])
  }
};
</script>

<style>
</style>
