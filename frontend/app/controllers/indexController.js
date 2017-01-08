'use strict';

var IndexControllerDefinition = function IndexController($scope, TestService) {
  
  // $scope variables are not acessible from "Controller as ctrl" "scope"...
  // Controller as ctrl = this... $scope.controllersName === this
  // When you use Controller as ctrl, you're creating a instance of this inside the $scope, which is visible when using ctrl.Variable
  // So, $scope !== this.
  
  var vm = this;
  
  vm.MyTitle = "This is a binded title.";
  
  TestService.get(function(data){
    vm.MyTitle = data.Message;
  });
  
};

angular.
module('dcs-app.controllers').
controller('IndexController', ["$scope", 'TestService', IndexControllerDefinition]);