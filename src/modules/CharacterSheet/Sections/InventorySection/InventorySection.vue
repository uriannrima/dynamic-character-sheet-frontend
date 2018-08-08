<template>
  <sheet-section>
    <inventory :items="items"></inventory>
  </sheet-section>
</template>

<script>
import SheetSection from 'shared/components/SheetSection';

import { Inventory } from './Inventory';

import { mapState } from 'modules/CharacterSheet/Store';

export default {
  components: { SheetSection, Inventory },
  computed: {
    ...mapState(['items'])
  }
};
</script>

<style>
</style>
