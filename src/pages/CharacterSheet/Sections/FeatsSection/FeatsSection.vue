<template>
  <sheet-section>
    <feats :feats="feats"></feats>
  </sheet-section>
</template>

<script>
import SheetSection from '@/components/SheetSection';

import Feats from './Feats';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { SheetSection, Feats },
  computed: {
    ...mapState(['feats'])
  }
};
</script>

<style>
</style>
