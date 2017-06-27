var ammunition = require('./ammunition.model');

module.exports = function attack({ name, attackBonus, damage, critical, range, type, notes, hasAmmunition }) {
    return {
        name,
        attackBonus,
        damage,
        critical,
        range,
        type,
        notes,
        hasAmmunition,
        ammunition: new ammunition({

        })
    }
}