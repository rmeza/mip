(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('InicioController', InicioController);

	function InicioController($http, $auth,  $state) {

		var vm = this;
		vm.plantas;
		vm.error;

		//Grab the list of plantas from the API
		$http.get('api/planta').success(function(plantas) {
			//vm.plantas = plantas;
			vm.plantas = plantas;
			var plantasObject = JSON.stringify(plantas);
			// Set the stringified user data into local storage
			localStorage.setItem('plantas', plantasObject);

			//$rootScope.selectedPlanta = angular.copy($rootScope.plantas[0]);
		}).error(function(error) {
			vm.error = error;
		});

		vm.SetPlanta = function(id)
		{
			
			console.log(id);
		};


	}

})();
