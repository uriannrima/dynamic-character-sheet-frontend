module.exports = function (app) {
    var controller = {};

    controller.getAll = function (req, res) {
        app.services.sizes.getAll(sizes => {
            res.json(sizes);
        });
    };

    app.createController('sizes', controller);
}
