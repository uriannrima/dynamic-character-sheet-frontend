import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

/**
 * An mixin factory to configure a component with it's own vuex store module.
 * @param {string[]} moduleConfiguration - Array containing the "path" to the component.
 * @param {Object} store - Component store object.
 * @param {boolean} namespaced - Boolean informing if the store is namedspaced. If it is, it must be namespaced from all modules bottom-up.
 * @param {string[]|boolean} stateMapping - Array of state properties that you want to mix from the store to the component computed properties. True if you want all state's properties.
 * @param {string[]|boolean} gettersMapping - Array of getters methods that you want to mix from the store to the component computed properties. True if you want all methods.
 * @param {string[]|boolean} mutationsMapping - Array of mutations methods that you want to mix from the store to the component methods. True if you want all methods.
 * @param {string[]|boolean} actionsMapping - Array of actions methods that you want to mix from the store to the component methods. True if you want all methods.
 */
export default function ({ moduleConfiguration, store, namespaced, stateMapping, gettersMapping, mutationsMapping, actionsMapping } = {}) {
  const mixin = {
    computed: {},
    methods: {},
    created() {
      // Causes error when used with hot-reload.
      // It doesn't break the app, but causes error on console.
      // Need to find a way to unregister on hot-reload.
      // Just beforeDestroy or destroyed didn't worked.
      this.$store.registerModule(moduleConfiguration, store);

      // Since the Vuex Store won't update on Vue DevTools until there is a commit
      // After the module has been registered we do a commit
      // (could be a empty commit, but let's be a bit informative)
      // After this Time Travel works.
      // Again, it's a mess with hot-reload, keeps adding commits.
      this.$store.commit('ModuleRegistered', { moduleConfiguration });
    }
  };

  const namespace = namespaced ? moduleConfiguration.join('/') : "";

  function checkAndMerge(mappingOptions, mappingFunction, fromStore, toComponent, namespace) {
    if (mappingOptions) {
      if (typeof mappingOptions === 'boolean') {
        toComponent = Object.assign(toComponent, { ...mappingFunction(namespace, Object.keys(fromStore)) });
      } else {
        toComponent = Object.assign(toComponent, { ...mappingFunction(namespace, mappingOptions) });
      }
    }
  };

  checkAndMerge(stateMapping, mapState, store.state, mixin.computed, namespace);
  checkAndMerge(gettersMapping, mapGetters, store.getters, mixin.computed, namespace);
  checkAndMerge(mutationsMapping, mapMutations, store.mutations, mixin.methods, namespace);
  checkAndMerge(actionsMapping, mapActions, store.actions, mixin.methods, namespace);

  return mixin;
};
