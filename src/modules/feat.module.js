var SubValueModule = require('./sub-value.module');

export const FEAT_TYPES = [
    "General",
    "Item Creation",
    "Reserve",
    "Metamagic"
];

export const Feat = function ({ _id, title, benefit, type, prerequisite, normal, special, unique, hasSubValue, subValue }) {
    return {
        _id,
        title,
        benefit,
        type,
        prerequisite,
        normal,
        special,
        unique: unique || true,
        hasSubValue,
        subValue: subValue ? new SubValueModule.SubValue(subValue) : new SubValueModule.SubValue({})
    }
}
