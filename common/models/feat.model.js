exports.FEAT_TYPES = [
    "General",
    "Item Creation",
    "Reserve",
    "Metamagic"
];

module.exports = function feat({ _id, title, benefit, type, prerequisite, normal, special, subValue }) {
    return {
        _id,
        title,
        benefit,
        type,
        prerequisite,
        normal,
        special,
        subValue
    }
}