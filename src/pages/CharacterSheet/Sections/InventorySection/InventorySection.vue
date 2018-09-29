<template>
  <div class="inventory-section">
    <inventory :items="items"></inventory>
  </div>
</template>

<script>
import { Inventory } from './Inventory';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { Inventory },
  computed: {
    ...mapState(['items'])
  }
};
</script>

<style lang="scss" scoped>
.inventory-section {
}
</style>
