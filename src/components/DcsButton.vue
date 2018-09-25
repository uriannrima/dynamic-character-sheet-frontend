<template>
  <emotion-component :css="css">
    <div slot-scope="{emotionClass}"
         :class="emotionClass">
      <slot></slot>
    </div>
  </emotion-component>
</template>

<script>
import Vue from 'vue';
import { EmotionComponent } from '@/components/Emotion';
import { withTheme, Theme, ITheme } from '@/components/Theme';

// Text Style
// return `
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
//   color: ${this.primary ? this.theme.text.primary : this.theme.text.main};
//   border: 2px solid ${
//     this.primary ? this.theme.text.primary : this.theme.text.main
//   };
//   label: DcsButton;
// `;

const DcsButton = Vue.extend({
  components: { EmotionComponent },
  props: {
    theme: Theme,
    primary: Boolean
  },
  computed: {
    color() {
      return this.primary ? this.theme.text.primary : this.theme.text.main;
    },
    css() {
      return {
        fontSize: '1em',
        margin: '1em',
        padding: '0.25em 1em',
        borderRadius: '3px',
        color: this.color,
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: this.color,
        label: 'DcsButton'
      };
    }
  }
});

export default withTheme(DcsButton);
</script>

<style>
</style>
