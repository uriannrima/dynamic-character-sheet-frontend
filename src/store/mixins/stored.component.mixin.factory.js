import { createNamespacedHelpers } from 'vuex'

/**
 * An mixin factory to configure a component with it's own vuex store module.
 * @param {string[]} moduleNamespace - Array containing the "path" to the component.
 * @param {Object} module - Component module object.
 * @param {string[]|boolean} stateMapping - Array of state properties that you want to mix from the store to the component computed properties. True if you want all state's properties.
 * @param {string[]|boolean} gettersMapping - Array of getters methods that you want to mix from the store to the component computed properties. True if you want all methods.
 * @param {string[]|boolean} mutationsMapping - Array of mutations methods that you want to mix from the store to the component methods. True if you want all methods.
 * @param {string[]|boolean} actionsMapping - Array of actions methods that you want to mix from the store to the component methods. True if you want all methods.
 * @param {string|boolean} commitRegistration - Commit name to be executed to inform Vuex that a module has been registered. Helps to make Vue DevTools to know that a new module exists. String containing the commit name, or a boolean to use default 'ModuleRegistered'.
 */
export default function ({ moduleNamespace, module, stateMapping, gettersMapping, mutationsMapping, actionsMapping, commitRegistration } = {}) {
  const mixin = {
    computed: {},
    methods: {},
    created () {
      // Avoid register module more than once.
      // Caveat: If using hot-reload, if you make changes on  the script that contains the store
      // Or if you create the store in the same script that you define the component, everytime you change it
      // The component will register again the store, and it will have it's alreadyRegistered cleared out.
      if (module.alreadyRegistered) return
      this.$store.registerModule(moduleNamespace, module)
      module.alreadyRegistered = true

      // A bit of a hack to allow me to call submodules dispatchs in a better manner.
      module.state._module = true

      // Since the Vuex Store won't update on Vue DevTools Store Modules until there is a commit...
      // After the module has been registered we do a commit (could be a empty commit, but let's be a bit informative)
      // After this, Time Travel works.
      // Caveat: Again, if you use hot-reload, and the store loses it's information, it will register again and do a new commit.
      if (commitRegistration) this.$store.commit((typeof commitRegistration === 'string') ? commitRegistration : 'ModuleRegistered', { moduleNamespace, module, stateMapping, gettersMapping, mutationsMapping, actionsMapping })
    }
  }

  const namespace = (typeof moduleNamespace === 'object') ? moduleNamespace.join('/') : moduleNamespace

  function checkAndMerge (mappingOptions, mappingFunction, fromStore, toComponent) {
    if (!fromStore || !toComponent) return
    if (mappingOptions) {
      if (typeof mappingOptions === 'boolean') {
        toComponent = Object.assign(toComponent, { ...mappingFunction(Object.keys(fromStore)) })
      } else {
        toComponent = Object.assign(toComponent, { ...mappingFunction(mappingOptions) })
      }
    }
  };

  const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers(namespace)

  checkAndMerge(stateMapping, mapState, module.state, mixin.computed)
  checkAndMerge(gettersMapping, mapGetters, module.getters, mixin.computed)
  checkAndMerge(mutationsMapping, mapMutations, module.mutations, mixin.methods)
  checkAndMerge(actionsMapping, mapActions, module.actions, mixin.methods)

  return mixin
};
