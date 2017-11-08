module.exports = function (app) {
    var controller = {};

    controller.getAll = function (req, res) {
        app.services.skill.getAll(skills => {
            res.json(skills);
        });
    };

    controller.saveOrUpdate = function (req, res) {
        var rSkill = req.body.skill;
        app.services.skill.saveOrUpdate(rSkill, skill => {
            res.json(skill);
        });
    };

    app.createController('skill', controller);
}
