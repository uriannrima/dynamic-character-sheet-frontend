exports.spell = function ({
    _id, name, school, subSchool,
    descriptor, level, components,
    castingTime, range, aim, duration,
    savingThrow, resistance, description }) {
    return {
        _id,
        name,
        school,
        subSchool,
        descriptor,
        level : level || 0,
        components,
        castingTime,
        range,
        aim,
        duration,
        savingThrow,
        resistance,
        description
    }
}