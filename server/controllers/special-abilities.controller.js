module.exports = function (app) {
    var controller = {};

    controller.get = function (req, res) {
        var rId = req.params.id;
        app.services.specialAbilities.getById(rId, function (specialAbility) {
            res.json(specialAbility);
        });
    };

    controller.getAll = function (req, res) {
        app.services.specialAbilities.getAll(function (specialAbilities) {
            res.json(specialAbilities);
        });
    };

    controller.saveOrUpdate = function (req, res) {
        var rSpecialAbility = req.body.specialAbility;
        app.services.specialAbilities.saveOrUpdate(rSpecialAbility, function (specialAbility) {
            res.json(specialAbility);
        });
    };
    
    app.createController('specialAbilities', controller);
}