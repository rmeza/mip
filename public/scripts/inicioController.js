(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('InicioController', InicioController);

	function InicioController($http, $auth, $rootScope, $state) {

		var vm = this;
		//vm.plantas;
		vm.error;

		//Grab the list of plantas from the API
		$http.get('api/planta').success(function(plantas) {
			//vm.plantas = plantas;
			$rootScope.plantas = plantas;
		}).error(function(error) {
			vm.error = error;
		});

	}

})();
