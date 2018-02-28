import { mapGetters, mapMutations, mapActions } from 'vuex';

export default function (options = {}) {
  if (!options) return;
  const mixin = {
    created() {
      console.log('Registering module:', options.moduleConfiguration);
      this.$store.registerModule(options.moduleConfiguration, options.store);
    }
  };

  if (options.gettersMapping) mixin.computed = { ...mapGetters(options.gettersMapping) };
  if (options.mutationsMapping) mixin.methods = { ...mapMutations(options.mutationsMapping) };
  if (options.actionsMapping) mixin.methods = Object.assign(mixin.methods, { ...mapActions(options.actionsMapping) });

  return mixin;
};
