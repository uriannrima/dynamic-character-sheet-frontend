<script>
import { css } from 'emotion';

export default {
  props: {
    css: {
      type: [Object, String],
      required: true
    }
  },
  computed: {
    emotionClass() {
      return css(this.css);
    }
  },
  render(h) {
    const { emotionClass } = this;
    return this.$scopedSlots.default({
      emotionClass
    });
  }
};
</script>

<style>
</style>
