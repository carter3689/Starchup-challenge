var app = angular.module('app')
	.service('AuthService', function(){})
app.controller('UserController', ['$scope','AuthService', '$state', function($scope, AuthService, $state){
    $scope.user = {
      email: 'foo@bar.com',
      password: 'foobar'
    };

        $scope.login = function() {
      AuthService.login($scope.user.email, $scope.user.password)
        .then(function() {
          $state.go('/success');
        });
    };


}]);