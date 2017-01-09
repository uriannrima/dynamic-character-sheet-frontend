/** Creating Ability Score Component. **/
angular.
module("dcs-app.ability-scores").
component('abilityScores', {
    templateUrl: 'ability-scores/ability-scores.template.html',
    controller: function() {
        this.text = "Ability Scores";
    }
});
