var app = angular.module('plunker', ['ui.router']);

app.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state("viewA", {
        url:'/viewA',
        templateUrl: 'view.html',
        controller: 'ctrlA',
      })
    .state("viewB", {
        url:'/viewB',
        templateUrl: 'view.html',
        controller: 'ctrlB',
      });
  }
]);

app.controller('MainCtrl', function($scope, $location) {});

app.controller('ctrlA', function($scope) {
  $scope.val = 'CtrlA';
});

app.controller('ctrlB', function($scope) {
  $scope.val = 'CtrlB';
});