angular.module( 'troverman.posts', [])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'posts', {
		url: '/posts',
		views: {
			"main": {
				controller: 'PostsCtrl',
				templateUrl: 'posts/index.tpl.html'
			}
		}
	});
}])

.controller( 'PostsCtrl', ['$scope', 'config', 'titleService', function PostsController( $scope, config, titleService ) {
	titleService.setTitle('troverman');
	$scope.currentUser = config.currentUser;
}]);