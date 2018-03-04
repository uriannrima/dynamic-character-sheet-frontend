/** Extension method to remove element at index. */
export default {
  extractFrom(from, properties) {
    var extracted = {}
    properties.forEach(prop => { extracted[prop] = from[prop] });
    return extracted;
  },
  extractTo(from, to, properties) {
    if (!properties) {
      properties = Object.keys(from);
    }
    properties.forEach(prop => {
      to[prop] = from[prop];
    });
  }
};
