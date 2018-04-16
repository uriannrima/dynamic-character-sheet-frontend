export const Language = function ({ _id, name = "", description = "", alphabet = "", speakers = "" }) {
  return {
    _id,
    name,
    description,
    alphabet,
    speakers
  };
}
