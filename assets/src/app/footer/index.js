angular.module( 'troverman.footer', [
])

.controller( 'FooterCtrl', ['$scope', 'config', function FooterController( $scope, config ) {
   	$scope.date = new Date();
}]);