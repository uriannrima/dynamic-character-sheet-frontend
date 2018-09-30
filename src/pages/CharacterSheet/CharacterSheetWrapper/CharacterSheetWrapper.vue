<template>
  <div class="character-sheet-wrapper">
    <sheet>
      <character-sheet-header slot="header"></character-sheet-header>
      <character-sheet-section></character-sheet-section>
    </sheet>
  </div>
</template>

<script>
import { CharacterSheetHeader } from '../CharacterSheetHeader';
import { CharacterSheetSection } from '../CharacterSheetSection';

export default {
  components: {
    CharacterSheetHeader,
    CharacterSheetSection
  }
};
</script>

<style lang="scss" scoped>
.character-sheet-wrapper {
  padding-bottom: 55px;
}
</style>
