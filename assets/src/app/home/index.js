angular.module( 'troverman.home', [])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, lodash ) {
	titleService.setTitle('troverman');
	$scope.currentUser = config.currentUser;
});