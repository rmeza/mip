(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('ConfiguraciontrampaController', ConfiguraciontrampaController);


	function ConfiguraciontrampaController($http, $auth, $rootScope, $state,$scope) {

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

		

		/*vm.editTrampa =function(vm.numerotrampa){
			var objTrampa = {

				numerotrampa:vm.numerotrampa,
				idplanta:$rootScope.selectedPlanta.id,
				tipotrampa:vm.selectedTipoTrampa,
				clasificiontrampa:vm.selectedClasificacionTrampa,
				ubicacion:vm.selectedUbicacion,
				descripcion:vm.descripcion
			};

			$http({
				method: 'POST',
				url: 'api/configuraciontrampa',
				data: objTrampa,
				headers: {'Content-Type': 'application/json'}
			}).success(function(response) {
				console.log(response);
				$state.go('trampas');
			}).error(function(response) {
				console.log(response);
			});

		}*/
		

		$scope.deleteTrampa = function(id){
			
			$http.delete('api/configuraciontrampa/'+id)
			.success(function(response) {
				console.log(response);
				$state.go('trampas');
			})
			.error(function(response) {
				console.log(response);
			});
		};

		vm.addTrampa = function() {
			var objTrampa = {

				numerotrampa:vm.numerotrampa,
				idplanta:$rootScope.selectedPlanta.id,
				tipotrampa:vm.selectedTipoTrampa,
				clasificiontrampa:vm.selectedClasificacionTrampa,
				ubicacion:vm.selectedUbicacion,
				descripcion:vm.descripcion
			};

			$http({
				method: 'POST',
				url: 'api/configuraciontrampa',
				data: objTrampa,
				headers: {'Content-Type': 'application/json'}
			}).success(function(response) {
				console.log(response);
				$state.go('trampas');
			}).error(function(response) {
				console.log(response);
			});
		};

	}

})();
