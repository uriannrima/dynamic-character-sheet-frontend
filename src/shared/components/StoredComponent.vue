<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    module: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      registered: false
    }
  },
  created() {
    if (!this.registered) {
      this.$store.registerModule(this.name, this.module);
      this.registered = true;
    }
  },
  render(h) {
    return h('div', this.$slots.default);
  }
}
</script>
