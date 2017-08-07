module.exports = function (app) {
    var controller = {};

    controller.index = function (req, res) {
        
        var contentType = {
            'content-type': 'text/html; charset=utf-8'
        };

        res.status(200).set(contentType).sendFile('index.html');
    };

    app.createController('home', controller);
}