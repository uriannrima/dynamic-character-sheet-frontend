/** Creating Vital Scores Component. **/
angular.
module("dcs-app.vital-scores").
component('vitalScores', {
    templateUrl: 'vital-scores/vital-scores.template.html',
    controller: function() {
        this.text = "Vital Scores";
    }
});