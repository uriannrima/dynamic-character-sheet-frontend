module.exports = function (app) {
    var controller = {};

    controller.getAll = function (req, res) {
        app.services.spellSchools.getAll(function (spellSchools) {
            res.json(spellSchools);
        });
    };
    
    app.createController('spellSchools', controller);
}