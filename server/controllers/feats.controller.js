module.exports = function (app) {
    var controller = {};

    controller.get = function (req, res) {
        var rId = req.params.id;
        app.services.feats.getById(rId, function (feat) {
            res.json(feat);
        });
    };

    controller.getAll = function (req, res) {
        app.services.feats.getAll(function (feats) {
            res.json(feats);
        });
    };

    controller.saveOrUpdate = function (req, res) {
        var rFeat = req.body.feat;
        app.services.feats.saveOrUpdate(rFeat, function (feat) {
            res.json(feat);
        });
    };
    
    app.createController('feats', controller);
}