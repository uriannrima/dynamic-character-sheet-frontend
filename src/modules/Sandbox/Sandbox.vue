<template>
  <div class="Sandbox">
    <div>
      <span>Default:</span>
      <themed-button>Main</themed-button>
      <themed-button primary>Primary</themed-button>
      <span>Themed:</span>
      <theme-provider :theme="coloredTheme">
        <themed-button @click="$emit('main-button')">Main</themed-button>
        <themed-button primary
                       @click="$emit('primary-button')">Primary</themed-button>
      </theme-provider>
      <input v-model="coloredTheme.main">
      <input v-model="coloredTheme.primary">
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
        main: 'purple',
        primary: 'gray'
      }
    };
  }
});
</script>
