<template>
  <div class="feats-section">
    <feats :feats="feats"></feats>
  </div>
</template>

<script>
import Feats from './Feats';
import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { Feats },
  computed: {
    ...mapState(['feats'])
  }
};
</script>

<style lang="scss" scoped>
.feats-section {
}
</style>
