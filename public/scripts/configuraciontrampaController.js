(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('ConfiguraciontrampaController', ConfiguraciontrampaController);

	function ConfiguraciontrampaController($http, $auth, $rootScope, $state) {

		var vm = this;

		vm.trampas;
		vm.error;

		//Grab the list of trampas from the API
		$http.get('api/configuraciontrampa').success(function(trampas) {
			vm.trampas = trampas;
		}).error(function(error) {
			vm.error = error;
		});


		//use to populate input tipo select.
		$http.get('api/tipotrampa').success(function(tipotrampas) {
			vm.tipotrampas = tipotrampas;
		}).error(function(error) {
			vm.error = error;
		});
		//vm.selectedTipoTrampa = angular.copy(vm.tipotrampas[0]);
    //use to populate input clasificacion select.
		$http.get('api/clasificaciontrampa').success(function(clasificaciones) {
			vm.clasificaciones = clasificaciones;
		}).error(function(error) {
			vm.error = error;
		});

		//use to populate input ubicacion select.
		$http.get('api/ubicaciontrampa').success(function(ubicaciones) {
			vm.ubicaciones = ubicaciones;
		}).error(function(error) {
			vm.error = error;
		});

		vm.addTrampa = function() {
			$scope.movie.$save(function() {
				$state.go('trampas');
			});
		};


	}

})();
