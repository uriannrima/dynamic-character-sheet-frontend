<script>
export default {
  props: {
    module: String,
    namespaced: Boolean,
    mapState: [Array, String],
    mapGetters: [Array, String],
    mapActions: [Array, String],
    mapMutations: [Array, String]
  },
  computed: {
    mappedState() {
      if (this.mapState) {
        const storeState = this.module
          ? this.$store.state[this.module]
          : this.$store.state;
        if (Array.isArray(this.mapState)) {
          return this.mapState.reduce((mapping, state) => {
            mapping[state] = storeState[state];
            return mapping;
          }, {});
        } else {
          return storeState[this.mapState];
        }
      }
    },
    mappedGetters() {
      if (this.mapGetters) {
        const storeGetters = this.$store.getters;
        if (Array.isArray(this.mapGetters)) {
          return this.mapGetters.reduce((mapping, getter) => {
            mapping[getter] = storeGetters[this.getNamespaced(getter)];
            return mapping;
          }, {});
        } else {
          return storeGetters[this.getNamespaced(this.mapGetters)];
        }
      }
    },
    mappedMutations() {
      if (this.mapMutations) {
        if (Array.isArray(this.mapMutations)) {
          return this.mapMutations.reduce((mapping, mutation) => {
            mapping[mutation] = payload => {
              this.$store.commit(this.getNamespaced(mutation), payload);
            };
            return mapping;
          }, {});
        } else {
          const mappedMutation = payload => {
            this.$store.commit(this.getNamespaced(this.mapMutations), payload);
          };
          return mappedMutation;
        }
      }
    },
    mappedActions() {
      if (this.mapActions) {
        if (Array.isArray(this.mapActions)) {
          return this.mapActions.reduce((mapping, action) => {
            mapping[action] = payload => {
              this.$store.dispatch(this.getNamespaced(action), payload);
            };
            return mapping;
          }, {});
        } else {
          const mappedAction = payload => {
            this.$store.dispatch(this.getNamespaced(this.mapActions), payload);
          };
          return mappedAction;
        }
      }
    }
  },
  methods: {
    getNamespaced(name) {
      return this.namespaced ? `${this.module}/${name}` : name;
    }
  },
  render(h) {
    return (
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        state: this.mappedState,
        getters: this.mappedGetters,
        mutations: this.mappedMutations,
        actions: this.mappedActions
      })
    );
  }
};
</script>
