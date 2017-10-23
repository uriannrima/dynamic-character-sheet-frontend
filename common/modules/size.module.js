exports.size = function ({ _id, name, attackDCBonus, grappleBonus, hideBonus, carryBonus }) {
    return {
        _id,
        name,
        attackDCBonus,
        grappleBonus,
        hideBonus,
        carryBonus
    }
}

exports.Size = class {
    constructor({ _id, name, attackDCBonus, grappleBonus, hideBonus, carryBonus }) {
        Object.assign(this, { _id, name, attackDCBonus, grappleBonus, hideBonus, carryBonus })
    }
}