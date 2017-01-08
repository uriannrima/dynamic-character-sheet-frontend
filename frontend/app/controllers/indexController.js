'use strict';

var IndexControllerDefinition = function IndexController($scope, $timeout, TestService) {

  // $scope variables are not acessible from "Controller as ctrl" "scope"...
  // Controller as ctrl = this... $scope.controllersName === this
  // When you use Controller as ctrl, you're creating a instance of this inside the $scope, which is visible when using ctrl.Variable
  // So, $scope !== this.

  var vm = this;

  vm.MyTitle = "This is a binded title.";

  // Small example of server request using a service.
  var makeRequestFunction = function() {
    TestService.get(function(data) {
      vm.MyTitle = "Something came from server... Wait for it.";

      var receiveMessageFunction = function() {
        vm.MyTitle = data.Message;
      };

      $timeout(receiveMessageFunction, 2000);
    });
  };

  $timeout(makeRequestFunction, 1000);
};

angular.
module('dcs-app.controllers').
controller('IndexController', IndexControllerDefinition);
