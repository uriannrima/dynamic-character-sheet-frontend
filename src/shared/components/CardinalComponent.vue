<script>
export default {
  props: {
    cardinal: {
      type: Number,
      required: true
    }
  },
  render(createElement) {
    var text = `${this.cardinal}th`;
    switch (this.cardinal) {
      case 1:
        text = '1st';
        break;
      case 2:
        text = '2nd';
        break;
      case 3:
        text = '3rd';
        break;
    }
    return createElement('span', text);
  }
};
</script>
