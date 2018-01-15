export const Sizes = [
    {
        "name": "Fine",
        "modifier": 8.0,
        "grappleBonus": -16.0,
        "hideBonus": 16.0,
        "carryBonus": 0.12
    },
    {
        "name": "Diminutive",
        "modifier": 4.0,
        "grappleBonus": -12.0,
        "hideBonus": 12.0,
        "carryBonus": 0.25
    },
    {
        "name": "Tiny",
        "modifier": 2.0,
        "grappleBonus": -8.0,
        "hideBonus": 8.0,
        "carryBonus": 0.5
    },
    {
        "name": "Small",
        "modifier": 1.0,
        "grappleBonus": -4.0,
        "hideBonus": 4.0,
        "carryBonus": 0.75
    },
    {
        "name": "Medium",
        "modifier": 0.0,
        "grappleBonus": 0.0,
        "hideBonus": 0.0,
        "carryBonus": 1.0
    },
    {
        "name": "Large",
        "modifier": -1.0,
        "grappleBonus": 4.0,
        "hideBonus": -4.0,
        "carryBonus": 2.0
    },
    {
        "name": "Huge",
        "modifier": -2.0,
        "grappleBonus": 8.0,
        "hideBonus": -8.0,
        "carryBonus": 4.0
    },
    {
        "name": "Gargantuan",
        "modifier": -4.0,
        "grappleBonus": 12.0,
        "hideBonus": -12.0,
        "carryBonus": 8.0
    },
    {
        "name": "Collosal",
        "modifier": -8.0,
        "grappleBonus": 16.0,
        "hideBonus": -16.0,
        "carryBonus": 16.0
    }
];

export const Size = function ({ _id, name, modifier, grappleBonus, hideBonus, carryBonus }) {
    return {
        _id,
        name,
        modifier,
        grappleBonus,
        hideBonus,
        carryBonus
    }
}
