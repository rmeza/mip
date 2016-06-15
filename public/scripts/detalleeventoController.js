(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('DetalleEventoController',DetalleEventoController)

	function DetalleEventoController($http, $auth, $rootScope,$state,$scope) {

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

				idevento:'10',//vm.idevento,
				idplaga:vm.selectedPlaga,
				quantity:vm.quantity,
				createdby: $rootScope.currentUser.email,
				modifiedby:$rootScope.currentUser.email
			};

			$http({
				method: 'POST',
				url: 'api/detalleEvento',
				data: objdetalleEvento,
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
