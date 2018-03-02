/** Extension method to remove element at index. */
export default {
  extractFrom(from, properties) {
    var extracted = {}
    properties.forEach(prop => { extracted[prop] = from[prop] });
    return extracted;
  },
  extractTo(from, to, properties) {
    if (!properties) {
      properties = Object.keys(to);
    }
    properties.forEach(prop => {
      if (!from.hasOwnProperty(prop)) return;
      to[prop] = from[prop];
    });
  }
};
