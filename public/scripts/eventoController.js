(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('EventoController',EventoController)

	function EventoController($http, $auth, $rootScope,$state,$scope,$filter) {


		var vm = this;

		vm.eventos;
		vm.detalles;
		vm.configuracionesIds
		vm.error;
		//vm.date=Date(vm.date);



		//obtiene numero de semana dada una fecha
	     vm.changeDate =function( date) {

	    	//vm.date= $filter('date')(date, "yyyy-MM-dd");
	    	vm.semana= $filter('date')(date, "ww");
				vm.semana = Number(vm.semana) +1;
	        console.log( "vm.date:", vm.date );
	        console.log( "vm.semana:", vm.semana );
	    };


		//Grab the list of eventos from the API
		$http.get('api/evento')
		.success(function(eventos) {
			vm.eventos = eventos;
		})
		.error(function(error) {
			vm.error = error;
		});

		$http.get('api/showConfiguracionIds')
		.success(function(configuracionesIds) {
			vm.configuracionesIds = configuracionesIds;
			console.log(vm.configuracionesIds);
		})
		.error(function(error) {
			vm.error = error;
		});



		vm.showConfiguraciones=function(id){

			$http.get('api/showConfiguracion/'+id)
			.success(function(configuraciones) {
				console.log(configuraciones);
				vm.ubicacion=configuraciones[0].ubicacionname;
				vm.clasificacion=configuraciones[0].clasificacionname;
			})
			.error(function(error) {
				vm.error = error;
			});

		};

		//todo probar que funcione
		//obtiene los detalles de un evento
		// hace visible o invisible el detalle, dado un numero de trampa
		vm.showDetalle=function (id){
			console.log("valor del activo:"+vm.active)
			if (vm.active != id) {
			vm.active = id;
			}
			else {
			vm.active = null;
			}

			$http.get('api/showDetalleEvento/'+id)
			.success(function(detalles) {
			vm.detalles = detalles;
			})
			.error(function(error) {
			vm.error = error;
			});
		};



		vm.addEvento = function() {
			var objEvento = {

				idconfigtrampa:vm.selectedConfigTrampa,
				fecha:vm.date,
				semana:vm.semana,
				descripcion:vm.descripcion,
				createdby: $rootScope.currentUser.email,
				modifiedby:$rootScope.currentUser.email
			};

			$http({
				method: 'POST',
				url: 'api/evento',
				data: objEvento,
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
