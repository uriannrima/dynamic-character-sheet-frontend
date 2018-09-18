import Vue, { PropOptions } from 'vue'

export const createThemeProvider = (themeProps: PropOptions = { type: Object, required: true }) => {
  return Vue.extend({
    /**
     * Receive theme as props.
     */
    props: {
      theme: themeProps
    },
    /**
     * Inject 'Theme' to lower components.
     */
    provide() {
      return {
        theme: this.theme
      };
    },
    /**
     * Render slots.
     */
    render() {
      return <div>{this.$slots.default}</div>;
    }
  });
}

export const ThemeProvider = createThemeProvider();

const ThemeInjectorBase = {
  /**
   * Inject the theme
   */
  inject: {
    theme: {
      default: undefined
    }
  }
};

export const withTheme = (Component: any) => {
  return Vue.extend({
    ...ThemeInjectorBase,
    render(h) {
      const { theme } = this as any;
      var componentProperties: any = {
        attrs: this.$attrs,
        on: this.$listeners
      };
      if (theme) {
        componentProperties = {
          ...componentProperties,
          props: { theme }
        }
      }
      return h(Component, componentProperties, this.$slots.default);
    }
  })
};

export const ThemeInjector = Vue.extend({
  ...ThemeInjectorBase,
  render() {
    const { theme } = this as any;
    return <div>{this.$scopedSlots.default({ theme })}</div>;
  }
});

export default ThemeProvider;
