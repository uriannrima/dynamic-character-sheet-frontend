export default {
  methods: {
    onSelect(model) {
      this.$emit('onSelected', { model });
    }
  }
}
