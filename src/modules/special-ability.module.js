export const SpecialAbility = function ({ _id, name, description, type, subValues = [] }) {
  return {
    _id,
    name,
    description,
    type,
    subValues
  }
}
