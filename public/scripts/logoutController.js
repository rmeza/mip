(function() {

	'use strict';

	angular
		.module('authApp')
		.controller('LogoutController',LogoutController);

	function LogoutController($http, $auth, $rootScope, $state) {
		$auth.logout().then(function() {
			// Remove the authenticated user from local storage
			localStorage.removeItem('user');
			localStorage.removeItem('plantas');

			// Flip authenticated to false so that we no longer
			// show UI elements dependant on the user being logged in
			$rootScope.authenticated = false;

			// Remove the current user info from rootscope
			$rootScope.currentUser = null;
			$rootScope.plantas = null;
			$rootScope.selectedPlanta = null;
			// Redirect to auth (necessary for Satellizer 0.12.5+)
			$state.go('auth');
		});
	}

})();
