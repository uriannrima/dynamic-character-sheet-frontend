<template>
  <character-sheet-loading>
    <character-sheet-wrapper class="sheet-wrapper"></character-sheet-wrapper>
    <character-sheet-section-menu></character-sheet-section-menu>
    <character-sheet-panel panel-selector=".sheet-wrapper"></character-sheet-panel>
  </character-sheet-loading>
</template>

<script>
import { CharacterSheetLoading } from './CharacterSheetLoading';
import { CharacterSheetWrapper } from './CharacterSheetWrapper';
import { CharacterSheetSectionMenu } from './CharacterSheetSectionMenu';
import { CharacterSheetPanel } from './CharacterSheetPanel';

export default {
  components: {
    CharacterSheetLoading,
    CharacterSheetWrapper,
    CharacterSheetSectionMenu,
    CharacterSheetPanel
  }
};
</script>

<style>
</style>
