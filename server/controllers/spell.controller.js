module.exports = function (app) {
    var controller = {};

    controller.get = function (req, res) {
        var rId = req.params.id;
        app.services.spell.getById(rId, function (spell) {
            res.json(spell);
        });
    };

    controller.getAll = function (req, res) {
        app.services.spell.getAll(function (spells) {
            res.json(spells);
        });
    };

    controller.saveOrUpdate = function (req, res) {
        var rSpell = req.body.spell;
        app.services.spell.saveOrUpdate(rSpell, function (spell) {
            res.json(spell);
        });
    };

    app.createController('spell', controller);
}
