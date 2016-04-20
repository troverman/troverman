angular.module( 'troverman', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'lodash',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'troverman.home',
    'troverman.intro',
    'troverman.login',
    'troverman.nav',
    'troverman.register',
    'troverman.projects',
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {
            window.location = '/';
        }
        else {
            window.location = $location.$$absUrl;
        }
    });
    $locationProvider.html5Mode(true);
})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config, $rootScope ) {
    config.currentUser = window.currentUser; 
});

