<template>
  <div class="Sandbox">
    {{counter}}
    <styled-button :primary="primary">StyledButton</styled-button>
    <theme-provider :theme="theme">
      <styled-button :primary="primary">StyledButton</styled-button>
    </theme-provider>
  </div>
</template>

<script>
import StyledButton from '@/components/StyledButton.vue';
import { ThemeProvider } from '@/components/Theme';

export default {
  components: { StyledButton, ThemeProvider },
  data: () => ({
    counter: 0,
    primary: false,
    theme: {
      text: {
        main: 'red',
        primary: 'blue'
      }
    }
  }),
  created() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }
};
</script>

<style>
</style>
