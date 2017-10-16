exports.spellSchool = function ({ _id, name, description, subject, subSchools }) {
    return {
        _id,
        name,
        description,
        subject,
        subSchools
    }
}

exports.subSchool = function ({ name, description }) {
    return {
        name,
        description
    }
};