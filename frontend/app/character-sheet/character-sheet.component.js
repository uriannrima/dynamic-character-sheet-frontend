/** Creating Character Sheet Component. **/
angular.
module("dcs-app.character-sheet").
component('characterSheet', {
    templateUrl: 'character-sheet/character-sheet.template.html',
    controller: function() {
        this.text = "Character Sheet";
    }
});
