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
    storeState() {
      let storeState = this.$store.state;
      if (this.module) {
        if (this.module.indexOf('/') !== -1) {
          this.module.split('/').forEach(subModule => {
            storeState = storeState[subModule];
          });
        } else {
          storeState = this.$store.state[this.module];
        }
      }
      return storeState;
    },
    mappedState() {
      if (this.mapState) {
        if (Array.isArray(this.mapState)) {
          return this.mapState.reduce((mapping, state) => {
            mapping[state] = this.storeState[state];
            return mapping;
          }, {});
        } else {
          return {
            [this.mapState]: this.storeState[this.mapState]
          };
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
          return {
            [this.mapGetters]: storeGetters[this.getNamespaced(this.mapGetters)]
          };
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
          return {
            [this.mapMutations]: mappedMutation
          };
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
          return {
            [this.mapActions]: mappedAction
          };
        }
      }
    }
  },
  methods: {
    getStoreState() {},
    getNamespaced(name) {
      return this.namespaced ? `${this.module}/${name}` : name;
    }
  },
  render(h) {
    const element =
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        state: this.mappedState,
        getters: this.mappedGetters,
        mutations: this.mappedMutations,
        actions: this.mappedActions
      });
    return element && Array.isArray(element) ? element[0] : element;
  }
};
</script>
