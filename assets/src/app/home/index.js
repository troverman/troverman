angular.module( 'troverman.home', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
}])
.controller( 'HomeCtrl', ['$scope', 'config', 'titleService', function HomeController( $scope, config, titleService ) {
	titleService.setTitle('troverman');
	$scope.currentUser = config.currentUser;
}]);