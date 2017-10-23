var subValueModule = require('./sub-value.module');

exports.SpecialAbility = function ({ _id, name, description, type, hasSubValue, subValue }) {
    return {
        _id,
        name,
        description,
        type,
        hasSubValue,
        subValue: subValue || new subValueModule.subValue({})
    }
}