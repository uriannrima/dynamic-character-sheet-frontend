export const SpecialAbility = function ({ _id, name, description, type, hasSubValue, subValues = [] }) {
  return {
    _id,
    name,
    description,
    type,
    subValues
  }
}
