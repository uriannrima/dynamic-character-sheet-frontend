module.exports = function (app) {
    var controller = {};

    controller.getAll = function (req, res) {
        app.services.spellSchool.getAll(function (spellSchools) {
            res.json(spellSchools);
        });
    };

    app.createController('spellSchool', controller);
}
