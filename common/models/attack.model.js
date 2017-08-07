var ammunition = require('./ammunition.model');

module.exports = function attack({ name, attackBonus, damage, critical, range, type, notes, keyAbility, hasAmmunition }) {
    return {
        name,
        // attackBonus: {
        //     baseAttackBonus: 0,
        //     abilityScoreModifier: 0,
        //     proficiencyBonus: 0,
        //     magicBonus: 0,
        //     getTotal: function () {
        //         var result = 0;
        //         for (var key in this) {
        //             if (typeof this[key] !== "number") continue;
        //             result += this[key];
        //         }
        //         return result;
        //     }
        // },
        attackBonus,
        damage,
        critical,
        range,
        type,
        notes,
        hasAmmunition,
        keyAbility: keyAbility || "",
        ammunition: new ammunition({

        })
    }
}