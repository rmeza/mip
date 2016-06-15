(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('DetalleEventoController',DetalleEventoController)

	function DetalleEventoController($http, $auth, $rootScope,$state,$scope,EventoService) {

		var vm = this;
		vm.plagas;

		
		$http.get('api/showPlagas')
			.success(function(plagas) {
				vm.plagas=plagas;
			})
			.error(function(error) {
				vm.error = error;
		});

		vm.addDetalleEvento = function() {
			var objdetalleEvento = {

				idevento:EventoService.id_evento,//vm.idevento,
				idplaga:vm.selectedPlaga,
				quantity:vm.quantity,
				createdby: $rootScope.currentUser.email,
				modifiedby:$rootScope.currentUser.email
			};
			console.log('agregando el detalle');
			console.log(objdetalleEvento);

			$http({
				method: 'POST',
				url: 'api/detalleEvento',
				data: objdetalleEvento,
				headers: {'Content-Type': 'application/json'}
			}).success(function(response) {
				
				$state.go('eventos');
			}).error(function(response) {
				
			});
		};
		
	}

})();
