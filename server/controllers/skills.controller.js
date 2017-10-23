module.exports = function (app) {
    var controller = {};

    controller.getAll = function (req, res) {
        app.services.skills.getAll(skills => {
            res.json(skills);
        });
    };

    controller.saveOrUpdate = function (req, res) {
        var rSkill = req.body.skill;
        app.services.skills.saveOrUpdate(rSkill, skill => {
            res.json(skill);
        });
    };

    app.createController('skills', controller);
}
