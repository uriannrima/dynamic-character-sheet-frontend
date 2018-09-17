<template>
  <div class="Sandbox">
    <div>
      <span>Default:</span>
      <themed-button>Normal</themed-button>
      <themed-button primary>Primary</themed-button>
    </div>
    <div>
      <span>Colored Themed:</span>
      <theme-provider :theme="coloredTheme">
        <themed-button>Themed</themed-button>
        <themed-button primary>Themeed Primary</themed-button>
      </theme-provider>
    </div><div>
      <span>Dark Themed:</span>
      <theme-provider :theme="darkTheme">
        <themed-button>Themed</themed-button>
        <themed-button primary>Themeed Primary</themed-button>
      </theme-provider>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SheetHeader } from '@/components/character-sheet';
import { ThemeProvider } from '@/components/pure/ThemeProvider';
import ThemedButton from './TButton.vue';

export default Vue.extend({
  components: { SheetHeader, ThemeProvider, ThemedButton },
  data() {
    return {
      coloredTheme: {
        main: 'mediumseagreen',
        primary: 'orange'
      },
      darkTheme: {
        main: 'gray',
        primary: 'blueviolet'
      }
    };
  }
});
</script>
