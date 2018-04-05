/** Extension method to remove element at index. */
export default {
  extractFrom(from, properties) {
    var extracted = {}
    properties.forEach(prop => { extracted[prop] = from[prop] });
    return extracted;
  },
  extractTo(from, to, properties) {
    try {
      if (!properties) {
        properties = Object.keys(from);
      }
      properties.forEach(prop => {
        to[prop] = from[prop];
      });
    } catch (error) {
      console.error(error);
    }
  }
};
