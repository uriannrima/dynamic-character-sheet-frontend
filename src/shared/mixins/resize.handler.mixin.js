export default {
  mounted: function () {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('orientationchange', this.handleResize);
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize);
    window.addEventListener('orientationchange', this.handleResize);
  }
}
