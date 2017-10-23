module.exports = function (app) {
    var controller = {};

    controller.get = function (req, res) {
        var rId = req.params.id;
        app.services.spells.getById(rId, function (spell) {
            res.json(spell);
        });
    };

    controller.getAll = function (req, res) {
        app.services.spells.getAll(function (spells) {
            res.json(spells);
        });
    };

    controller.saveOrUpdate = function (req, res) {
        var rSpell = req.body.spell;
        app.services.spells.saveOrUpdate(rSpell, function (spell) {
            res.json(spell);
        });
    };

    app.createController('spells', controller);
}
