(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('DetalleEventoController',DetalleEventoController)

	function DetalleEventoController($http, $auth, $rootScope,$state,$scope) {

		var vm = this;

		$http.get('api/plaga')
		.success(function(plagas) {
			vm.plaas = plagas;
		})
		.error(function(error) {
			vm.error = error;
		});

		vm.addDetalleEvento = function(id) {
			var objdetalleEvento = {

				idevento:id,
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
