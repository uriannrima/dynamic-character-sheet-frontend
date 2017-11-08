module.exports = function (app) {
    var controller = {};

    controller.get = function (req, res) {
        var rId = req.params.id;
        app.services.feat.getById(rId, function (feat) {
            res.json(feat);
        });
    };

    controller.getAll = function (req, res) {
        app.services.feat.getAll(function (feats) {
            res.json(feats);
        });
    };

    controller.saveOrUpdate = function (req, res) {
        var rFeat = req.body.feat;
        app.services.feat.saveOrUpdate(rFeat, function (feat) {
            res.json(feat);
        });
    };

    app.createController('feat', controller);
}
