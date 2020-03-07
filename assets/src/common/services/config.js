angular.module( 'services.config', ['lodash'])
.service('config',['lodash', function(lodash) {
	// private vars here if needed
	return {
		siteName: 'TROVERMAN LIVE',
		// no trailing slash!
		siteUrl: '/',
		apiUrl: '/api',
		currentUser: false
	};
}]);