export function ammunition({ name, quantity, notes }) {
    return {
        name: name,
        quantity: quantity,
        notes: notes
    }
}

export function attack({ name, attackBonus, damage, critical, range, type, notes, hasAmmunition }) {
    return {
        name,
        attackBonus,
        damage,
        critical,
        range,
        type,
        notes,
        hasAmmunition,
        ammunition: new ammunition()
    }
}