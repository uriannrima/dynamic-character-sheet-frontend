/** Returns the string dashed at upper case letter. */
String.prototype.dashedCase = function () {
  return this.lowerFirstLetter().replace(/([A-Z])/g, '-$1').toLowerCase();
}

/** Returns the string dashed at upper case letter. */
String.prototype.lowerFirstLetter = function () {
  return this.charAt(0).toLocaleLowerCase() + this.slice(1);
}

/** Returns the string dashed at upper case letter. */
String.prototype.upperFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
