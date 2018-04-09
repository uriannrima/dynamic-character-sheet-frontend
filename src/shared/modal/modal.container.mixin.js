const OpenModalButton = {
  props: ['showModal'],
  template: `   
    <span class="left-icon glyphicon glyphicon-plus"
          @click="toggle"></span>
    </span>
  `,
  methods: {
    toggle() {
      this.$emit('update:showModal', !this.showModal);
    }
  }
};

export default {
  components: { OpenModalButton },
  data() {
    return {
      showModal: false,
      selected: null
    }
  },
  methods: {
    onSelected: async function ({ model }) {
      this.selected = model;
      this.showModal = true;
    }
  }
}
