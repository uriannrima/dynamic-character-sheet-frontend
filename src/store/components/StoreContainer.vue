<script>
export default {
  props: {
    storeName: {
      type: String,
      required: true
    },
    mapState: [Array, String]
  },
  computed: {
    mappedState() {
      if (this.mapState) {
        const storeState = this.$store.state[this.storeName];
        if (Array.isArray(this.mapState)) {
          return this.mapState.reduce((mapping, state) => {
            mapping[state] = storeState[state];
            return mapping;
          }, {});
        } else {
          return storeState[this.mapState];
        }
      }
    }
  },
  render(h) {
    return (
      this.$scopedSlots.default &&
      this.$scopedSlots.default({ ...this.mappedState })
    );
  }
};
</script>
