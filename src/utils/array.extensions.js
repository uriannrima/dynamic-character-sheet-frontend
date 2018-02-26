/** Extension method to remove element at index. */
Array.prototype.removeAt = function (index) {
  this.splice(index, 1);
};

/** Extend Array with Group By. */
Array.prototype.groupBy = function (funcProp) {
  return this.reduce(function (accumulator, value) {
    (accumulator[funcProp(value)] = accumulator[funcProp(value)] || []).push(value);
    return accumulator;
  }, {});
};

/** Extend array with Order By. */
Array.prototype.orderBy = function (funcProp, desc = false) {
  return this.sort((a, b) => {
    var aValue = funcProp(a);
    var bValue = funcProp(b);
    var type = typeof aValue;
    var result = 0;

    if (type === 'string') {
      aValue = aValue.toUpperCase();
      bValue = bValue.toUpperCase();
      if (aValue < bValue) {
        result = -1;
      } else if (aValue > bValue) {
        result = 1;
      }
    } else if (type === 'number') {
      result = aValue - bValue;
    }

    return desc ? result * -1 : result;
  });
};

/** Extend array with Order By Desc. */
Array.prototype.orderByDesc = function (funcProp) {
  return this.orderBy(funcProp, true);
};
