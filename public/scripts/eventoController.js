(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('EventoController',EventoController)

	function EventoController($http, $auth, $rootScope,$state,$scope,$filter,EventoService, PlantaService) {

		if(!PlantaService.id_planta)
				$state.go('inicio');

		var vm = this;
		vm.eventos;
		vm.detalles;
		vm.configuracionesIds
		vm.error;

		/**
		* @method changeDate - This function calculete the numbre of the week
		* @parameter date - from a form
		* @return semana - the numeber of week correpond to the date given
		*/
		vm.changeDate =function( date) {
			//vm.date= $filter('date')(date, "yyyy-MM-dd");
			vm.semana= $filter('date')(date, "ww");
			vm.semana = Number(vm.semana) +1;
			console.log( "vm.date:", vm.date );
			console.log( "vm.semana:", vm.semana );
		};

		var idplanta =  PlantaService.id_planta;

		/**
		* @method  - This function get a object of eventos
		* @return eventos - the object that contains all eventos
		*/
		$http.get('api/evento/'+ idplanta)
		.success(function(eventos) {
			vm.eventos = eventos;
		})
		.error(function(error) {
			vm.error = error;
			//if(error.error=='Forbidden')
			//	$state.go('inicio');
		});

		/**
		* @method  - This function get a object of configurations
		* @parameter idplanta - identifier of the planta selected
		* @return configuracionesIds - the object that contains all configurations
		*/

		if(idplanta){
			$http.get('api/showConfiguracionIds/'+ idplanta)
			.success(function(configuracionesIds) {
				vm.configuracionesIds = configuracionesIds;
				console.log(vm.configuracionesIds);
			})
			.error(function(error) {
				vm.error = error;
			});
		}

		/**
		* @method showConfiguraciones - This function get ubicacion y clasificacion for a form
		* @parameter id - identifier of the configured trampa
		* @return ubicacion, clasificacion - is a data binding to evento form
		*/
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

		/**
		* @method showDetalle - This function get detalles from eventos
		* @parameter id - identifier of evento
		* @return actived - is a data binding to put invisible/visible a detail for a event
		* @return detalles - is a object to get the data of evento detail
		*/
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

		/**
		* @method addEvento - This function store events
		* @parameter selectedConfigTrampa- identifier of configured trampa
		* @parameter date- event date
		* @parameter semana - number of week correpond to the event date
		* @parameter description - description of the event
		* @parameter createdby- user mail of the current user
		* @return objEvento - is a object to sent to store
		*/
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

		/**
		* @method sessionEvento - This function set the id_event
		* @parameter id - is a identifier to pass to the detalles controller
		*/
		vm.sessionEvento= function (id){
			EventoService.id_evento=id;
			console.log('ahora el servicio es:'+EventoService.id_evento);
		}

	}

})();
