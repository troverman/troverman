angular.module( 'troverman.nav', [])
.controller( 'NavCtrl', ['$rootScope', '$scope', '$state', 'config', function NavController( $rootScope, $scope, $state, config ) {
    $scope.currentUser = config.currentUser;
    $rootScope.$on("$stateChangeSuccess", function() {
    	window.scrollTo(0, 0);
    });
}])