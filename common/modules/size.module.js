exports.Sizes = [
    {
        "name": "Fine",
        "attackDCBonus": 8.0,
        "grappleBonus": -16.0,
        "hideBonus": 16.0,
        "carryBonus": 0.12
    },
    {
        "name": "Diminutive",
        "attackDCBonus": 4.0,
        "grappleBonus": -12.0,
        "hideBonus": 12.0,
        "carryBonus": 0.25
    },
    {
        "name": "Tiny",
        "attackDCBonus": 2.0,
        "grappleBonus": -8.0,
        "hideBonus": 8.0,
        "carryBonus": 0.5
    },
    {
        "name": "Small",
        "attackDCBonus": 1.0,
        "grappleBonus": -4.0,
        "hideBonus": 4.0,
        "carryBonus": 0.75
    },
    {
        "name": "Medium",
        "attackDCBonus": 0.0,
        "grappleBonus": 0.0,
        "hideBonus": 0.0,
        "carryBonus": 1.0
    },
    {
        "name": "Large",
        "attackDCBonus": -1.0,
        "grappleBonus": 4.0,
        "hideBonus": -4.0,
        "carryBonus": 2.0
    },
    {
        "name": "Huge",
        "attackDCBonus": -2.0,
        "grappleBonus": 8.0,
        "hideBonus": -8.0,
        "carryBonus": 4.0
    },
    {
        "name": "Gargantuan",
        "attackDCBonus": -4.0,
        "grappleBonus": 12.0,
        "hideBonus": -12.0,
        "carryBonus": 8.0
    },
    {
        "name": "Collosal",
        "attackDCBonus": -8.0,
        "grappleBonus": 16.0,
        "hideBonus": -16.0,
        "carryBonus": 16.0
    }
];

exports.Size = function ({ _id, name, attackDCBonus, grappleBonus, hideBonus, carryBonus }) {
    return {
        _id,
        name,
        attackDCBonus,
        grappleBonus,
        hideBonus,
        carryBonus
    }
}