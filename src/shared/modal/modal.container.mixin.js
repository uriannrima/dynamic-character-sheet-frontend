export default {
  data() {
    return {
      showModal: false,
      selected: null
    }
  },
  methods: {
    onSelected: function ({ model }) {
      this.selected = model;
      this.showModal = true;
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    }
  }
}
