exports.SpellSchool = function ({ _id, name, description, subject, subSchools = "" }) {
    return {
        _id,
        name,
        description,
        subject,
        subSchools
    }
}

exports.SubSchool = function ({ name, description }) {
    return {
        name,
        description
    }
};