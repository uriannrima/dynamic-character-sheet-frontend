exports.FEAT_TYPES = [
    "General",
    "Item Creation",
    "Reserve",
    "Metamagic"
];

module.exports = function feat({ title, benefit, type, prerequisite, normal, special, subValue }) {
    return {
        title,
        benefit,
        type,
        prerequisite,
        normal,
        special,
        subValue
    }
}