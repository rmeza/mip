(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('InicioController', InicioController);

	function InicioController($http,$auth,$state,PlantaService,$rootScope) {

		var vm = this;
		vm.plantas;
		vm.error;


		//Grab the list of plantas from the API
		$http.get('api/planta').success(function(plantas) {
			vm.plantas = plantas;
		}).error(function(error) {
			vm.error = error;
		});

		vm.SetPlanta = function(event,planta)
		{
			PlantaService.id_planta=planta.id;
			console.log("la planta id:"+planta.id);
			$rootScope.plantaSelected=planta.name;
			event.preventDefault();
		 $state.go('eventos');
		};



	}

})();
