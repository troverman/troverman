angular.module( 'troverman.projects', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'projects', {
		url: '/projects',
		views: {
			"main": {
				controller: 'ProjectsCtrl',
				templateUrl: 'projects/index.tpl.html'
			}
		}
	});
})

.controller( 'ProjectsCtrl', function ProjectsController( $scope, titleService, config ) {
	titleService.setTitle('troverman');
	$scope.currentUser = config.currentUser;

});
