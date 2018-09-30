<template>
  <character-sheet-loading>
    <character-sheet-wrapper class="sheet-wrapper"></character-sheet-wrapper>
    <character-sheet-section-menu></character-sheet-section-menu>
    <character-sheet-slideout slideout-selector=".sheet-wrapper"></character-sheet-slideout>
  </character-sheet-loading>
</template>

<script>
import { CharacterSheetLoading } from './CharacterSheetLoading';
import { CharacterSheetWrapper } from './CharacterSheetWrapper';
import { CharacterSheetSectionMenu } from './CharacterSheetSectionMenu';
import { CharacterSheetSlideout } from './CharacterSheetSlideout';

export default {
  components: {
    CharacterSheetLoading,
    CharacterSheetWrapper,
    CharacterSheetSectionMenu,
    CharacterSheetSlideout
  }
};
</script>

<style>
</style>
