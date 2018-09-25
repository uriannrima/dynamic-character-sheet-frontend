import Vue, { PropOptions } from 'vue'

/**
 * Generate a theme provider.
 * @param themeProps Property validation for the Theme. Must follow the "default" Vue property declaration.
 *  For example, the default value is { type:Object, required: true }.
 *  But an VueType validation can also be used for a better props validation.
 */
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

/**
 * Generate a default theme provider.
 */
export const ThemeProvider = createThemeProvider();

/**
 * Theme Injector Base.
 */
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

/**
 * High-Order-Component that injects theme as a property of the component passed as paramenter.
 * @param Component Component that will be wrapped.
 */
export const withTheme = (Component: any) => {
  console.log(Component);
  return Vue.extend({
    ...ThemeInjectorBase,
    render(h) {
      const { $attrs, $listeners, $props, theme, $slots } = this as any;
      var componentProperties: any = {
        attrs: $attrs,
        on: $listeners,
        props: {
          ...$props,
          ...(theme && { theme })
        }
      };
      return h(Component, componentProperties, $slots.default);
    }
  })
};

/**
 * Slot-scope version of the theme injector.
 * Theme will be passed as "theme" inside of the slot-scope.
 */
export const ThemeInjector = Vue.extend({
  ...ThemeInjectorBase,
  render() {
    const { theme } = this as any;
    return <div>{this.$scopedSlots.default({ theme })}</div>;
  }
});

export default ThemeProvider;
