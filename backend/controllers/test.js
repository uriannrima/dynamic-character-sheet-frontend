/** Controllers definitions for test. **/
module.exports = function(app) {

    // Controller definition.
    var controller = {};

    /** Test select. **/
    controller.select = function(req, res) {
        res.json({
            Message: "This Title Came from Service"
        });
    };

    return controller;
};
