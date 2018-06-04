/** Extension method to remove element at index. */
export default {
  extractFrom(from: any, properties: string[]) {
    var extracted: any = {};
    properties.forEach(prop => { extracted[prop] = from[prop] });
    return extracted;
  },
  extractTo(from: any, to: any, properties?: string[]) {
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
