const MinimizeButton = {
  props: ['minimize'],
  template: `   
    <span class="add-icon glyphicon" 
          :class="{'glyphicon-zoom-out' : !minimize, 'glyphicon-zoom-in' : minimize}" 
          @click="toggle">
    </span>
  `,
  methods: {
    toggle() {
      this.$emit('update:minimize', !this.minimize);
    }
  }
};

export default {
  components: { MinimizeButton },
  data() {
    return {
      minimize: false
    };
  }
}
