import debounce from 'lodash.debounce'

export default {
  methods: {
    onSelect: debounce(function (model) {
      this.$emit('selected', { model })
    }, 100)
  }
}
