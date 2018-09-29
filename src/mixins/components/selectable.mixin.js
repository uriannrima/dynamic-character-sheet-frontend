export default {
  methods: {
    emitSelect($event, selected, type) {
      const metaEvent = this.$getMetaEvent($event, { selected, type });
      this.$emit('select', metaEvent);
    }
  }
};
