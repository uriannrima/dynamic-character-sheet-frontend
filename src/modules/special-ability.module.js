var SubValueModule = require('./sub-value.module');

export const SpecialAbility = function ({ _id, name, description, type, hasSubValue, subValue }) {
    return {
        _id,
        name,
        description,
        type,
        hasSubValue,
        subValue: subValue || new SubValueModule.SubValue({})
    }
}
