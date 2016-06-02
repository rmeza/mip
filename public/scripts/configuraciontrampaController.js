(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('ConfiguraciontrampaController',ConfiguraciontrampaController,['$u'])
	
	function ConfiguraciontrampaController($http, $auth, $rootScope,$state,$scope,$uibModal, $log) {

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
		$scope.animationsEnabled = true;

		$scope.deleteRow = function (size) {

			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'myModalContent.html',
				controller: function ($scope, $uibModalInstance) {

					$scope.ok = function () {
						$uibModalInstance.close();						
					};

					$scope.cancel = function () {
						$uibModalInstance.dismiss('cancel');
					};
				},
				size: size,
				resolve: {
					items: function () {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function () {
				//funcion a ejecutar despues de el modal
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
				
			});
		};

		$scope.toggleAnimation = function () {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		};
	
		vm.deleteTrampa = function(id, index){

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
