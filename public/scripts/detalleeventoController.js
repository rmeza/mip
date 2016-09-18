(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('DetalleEventoController',DetalleEventoController)

	function DetalleEventoController($http, $auth, $rootScope,$state,$scope,EventoService) {

		var vm = this;
		vm.plagas;
		vm.items = [];

		$http.get('api/showPlagas')
			.success(function(plagas) {
				vm.plagas=plagas;
			})
			.error(function(error) {
				vm.error = error;
		});

		vm.addPlaga = function(){
			var item = {
				selectedPlaga :"",
				quantity: ""
			};
			vm.items.push(item);
		};

		vm.addDetalleEvento = function() {
			var detalleEventos=[];
			//populate session id_evento
			for(var i = 0; i< vm.items.length;i++)
			{
					vm.items[i].idevento= EventoService.id_evento;
					vm.items[i].createdby= $rootScope.currentUser.email;
					vm.items[i].modifiedby= $rootScope.currentUser.email;
			}


			console.log('agregando el detalle');
			console.log(vm.items);

			$http({
				method: 'POST',
				url: 'api/detalleEvento',
				data: JSON.stringify(vm.items),
				headers: {'Content-Type': 'application/json'},
				contentType: 'charset=UTF-8' 
			}).success(function(response) {
				console.log(response);
				$state.go('eventos');
			}).error(function(response) {
				console.log(response);
			});
		};


		/*vm.addDetalleEvento = function() {
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
				console.log(response);
				$state.go('eventos');
			}).error(function(response) {
				console.log(response);
			});
		};*/

	}

})();
