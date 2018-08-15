<template>
  <sheet-section>
    <feats :feats="feats"></feats>
  </sheet-section>
</template>

<script>
import SheetSection from '@shared/components/SheetSection';

import Feats from './Feats';

import { mapState } from '@modules/CharacterSheet/Store/Character';

export default {
  components: { SheetSection, Feats },
  computed: {
    ...mapState(['feats'])
  }
};
</script>

<style>
</style>
