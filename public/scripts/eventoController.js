(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('EventoController',EventoController,['$u'])
	
	function EventoController($http, $auth, $rootScope,$state,$scope,$uibModal, $log) {


		var vm = this;

		vm.eventos;
		vm.error;

		//Grab the list of eventos from the API
		$http.get('api/evento').success(function(eventos) {
			vm.eventos = eventos;
		}).error(function(error) {
			vm.error = error;
		});

		vm.addEvento = function() {
			var objEvento = {

				numerotrampa:vm.numerotrampa,
				idplanta:$rootScope.selectedPlanta.id,
				tipotrampa:vm.selectedTipoTrampa,
				clasificiontrampa:vm.selectedClasificacionTrampa,
				ubicacion:vm.selectedUbicacion,
				descripcion:vm.descripcion
			};

			$http({
				method: 'POST',
				url: 'api/evento',
				data: objEvento,
				headers: {'Content-Type': 'application/json'}
			}).success(function(response) {
				console.log(response);
				$state.go('eventos');
			}).error(function(response) {
				console.log(response);
			});
		};

	}

})();
