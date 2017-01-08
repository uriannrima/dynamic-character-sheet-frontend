/** Creating Character Details Component. **/
angular.
module("dcs-app.character-details").
component('characterDetails', {
    templateUrl: 'character-details/character-details.template.html',
    controller: function() {
        this.text = "Character Details";
    }
});
