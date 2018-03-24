import debounce from 'lodash.debounce';

export default {
  methods: {
    onSelect: debounce(function (model) {
      this.$emit('onSelected', { model });
    }, 100)
  }
}
