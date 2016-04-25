(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('ConfiguraciontrampaController', ConfiguraciontrampaController);

	function ConfiguraciontrampaController($http, $auth, $rootScope, $state) {

		var vm = this;

		vm.trampas;
		vm.error;

		//vm.getTrampas = function() {

			//Grab the list of trampas from the API
			$http.get('api/configuraciontrampa').success(function(trampas) {
				vm.trampas = trampas;
			}).error(function(error) {
				vm.error = error;
			});
	//	}


	}

})();
