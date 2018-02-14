export const FEAT_TYPES = [
    "General",
    "Item Creation",
    "Reserve",
    "Metamagic"
];

export const Feat = function ({ _id, title, benefit, type, prerequisite, normal, special, unique, subValues = [] }) {
    return {
        _id,
        title,
        benefit,
        type,
        prerequisite,
        normal,
        special,
        unique: unique || true,
        subValues
    }
}
