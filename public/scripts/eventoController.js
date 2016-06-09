(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('EventoController',EventoController)

	function EventoController($http, $auth, $rootScope,$state,$scope) {


		var vm = this;

		vm.eventos;
		vm.detalles;
		vm.error;

		//Grab the list of eventos from the API
		$http.get('api/evento')
		.success(function(eventos) {
			vm.eventos = eventos;
		})
		.error(function(error) {
			vm.error = error;
		});


		//todo probar que funcione
		vm.showDetalle=function (id){
			console.log("valor del activo:"+vm.active)
			if (vm.active != id) {
			vm.active = id;
			}
			else {
			vm.active = null;
			}

			$http.get('api/showdetalleevento/'+id)
			.success(function(detalles) {
			vm.detalles = detalles;
			})
			.error(function(error) {
			vm.error = error;
			});
		};

	}

})();
