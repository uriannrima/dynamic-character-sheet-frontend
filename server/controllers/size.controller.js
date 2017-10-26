module.exports = function (app) {
    var controller = {};

    controller.getAll = function (req, res) {
        app.services.size.getAll(sizes => {
            res.json(sizes);
        });
    };

    app.createController('size', controller);
}
