<template>
  <sheet-section>
    <languages :languages="languages"></languages>
  </sheet-section>
</template>

<script>
import SheetSection from 'shared/components/SheetSection';

import Languages from './Languages';

import { mapState } from 'modules/CharacterSheet/Store';

export default {
  components: { SheetSection, Languages },
  computed: {
    ...mapState(['languages'])
  }
};
</script>

<style>
</style>
