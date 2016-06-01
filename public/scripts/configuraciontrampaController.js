(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('ConfiguraciontrampaController',ConfiguraciontrampaController,['$uibModal'])
	
	function ConfiguraciontrampaController($http, $auth, $rootScope,$state,$scope,$uibModal) {

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

		/*vm.editTrampa =function(id){
			var objTrampa = {

				numerotrampa:vm.numerotrampa,
				idplanta:$rootScope.selectedPlanta.id,
				tipotrampa:vm.selectedTipoTrampa,
				clasificiontrampa:vm.selectedClasificacionTrampa,
				ubicacion:vm.selectedUbicacion,
				descripcion:vm.descripcion
			}

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

		};*/

		$scope.openModal = function (size) 
		{
		    var modalInstance =  $uibModal.open({
			    templateUrl: 'myModal.html',
			    controller: 'myModalController',
			    size: size,
			    resolve: {
			    	Items: function() //scope,$modal del modal
			        {
			          	return "Hola que asé";
			        }
			    }
		    });
		}
	
		$scope.deleteTrampa = function(id, index){

		$scope.menssage="";	
			
				$http.delete('api/configuraciontrampa/'+id)
				.success(function(response) {
					console.log(response);
					vm.trampas.splice(index, 1);
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
