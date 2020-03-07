angular.module( 'troverman.token', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'token', {
		url: '/token',
		views: {
			"main": {
				controller: 'TokenCtrl',
				templateUrl: 'token/index.tpl.html'
			}
		}
	});
}])
.controller( 'TokenCtrl', ['$scope', 'config', 'titleService', function TokenController( $scope, config, titleService ) {
	titleService.setTitle('troverman');
	$scope.currentUser = config.currentUser;
}]);