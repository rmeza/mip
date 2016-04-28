(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('ConfiguraciontrampaController', ConfiguraciontrampaController);

	function ConfiguraciontrampaController($http, $auth, $rootScope, $state) {

		var vm = this;

		vm.trampas;
		vm.error;
		vm.tipotrampas;
		vm.selectedTipoTrampa;
		/*vm.tipotrampas=[
			{countryId : 1, name : "France - Mainland", desc: "some description" },
			{countryId : 2, name : "Gibraltar", desc: "some description"},
			{countryId : 3, name : "Malta", desc: "some description"}
		];*/

		//Grab the list of trampas from the API
		$http.get('api/configuraciontrampa').success(function(trampas) {
			vm.trampas = trampas;
		}).error(function(error) {
			vm.error = error;
		});


		//use to populate input select.
		$http.get('api/tipotrampa').success(function(tipotrampas) {
			vm.tipotrampas = tipotrampas;
		}).error(function(error) {
			vm.error = error;
		});
		//vm.selectedTipoTrampa = angular.copy(vm.tipotrampas[0]);

		vm.addTrampa = function() {
			$scope.movie.$save(function() {
				$state.go('trampas');
			});
		};


	}

})();
