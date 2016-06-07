(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('EventoController',EventoController,['$u'])
	
	function EventoController($http, $auth, $rootScope,$state,$scope,$uibModal, $log) {


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

		//Grab the list of eventos from the API
		

		

		//todo probar que funcione
		vm.showDetalle=function (id){

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
