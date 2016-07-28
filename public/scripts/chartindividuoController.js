(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('ChartIndividuoController',ChartIndividuoController)

	function ChartIndividuoController($http, $auth,$state,$scope,PlantaService) {

		if(!PlantaService.id_planta)
				$state.go('inicio');

		var vm = this;

		$http.get('api/clasificaciontrampa').success(function(clasificaciones) {
			vm.clasificaciones = clasificaciones;
		}).error(function(error) {
			vm.error = error;
		});

		/**
		* @method  - This function get a object of configurations
		* @parameter idplanta - identifier of the planta selected
		* @return configuracionesIds - the object that contains all configurations
		*/
var idplanta = PlantaService.id_planta;
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


		vm.Graph = function() {
			var filters = {
				idPlanta:  PlantaService.id_planta,
				dateStart: vm.datestart,
				//dateEnd: vm.dateend,
				clasificacionTrampa: vm.selectedClasificacionTrampa,
				idconfiguraciontrampa : vm.selectedConfigTrampa
			};


			$http({
				method: 'GET',
				url: 'api/individuotrampa/filter',
				params: filters,
				headers: {'Content-Type': 'application/json'}
			}).success(function(plagas) {
				console.log(plagas);
				//console.log(JSON.stringify(plagas));

				GenerateChart(plagas);

			}).error(function(response) {
				console.log(response);
			});

		};//vm.Graph

		/**
		* Generate Chart
		*@param {object} plagas
		**/
		function GenerateChart(plagas)
		{
			var row = {};
			var position=0;
			var result=[];//array of rows object.
			var plagaValues=[];//for keys
			var categoriesValues=[];//for axis x
			for(var i =0;i<plagas.length;i++)
			{
					plagaValues.push(plagas[i].plaga);
					row.name = plagas[i].fechaevento;
					row[plagas[i].plaga]=plagas[i].quantity;

			}

			result.push(row);
			//only one
		if(plagas.length>0)
			categoriesValues.push(plagas[0].fechaevento);

			//Initializing chart properties.
			var chart = c3.generate({
				bindto: '#chart',
				data: {
					json: result,
					/*json:[
					{name:'4/1/2016',palomilla:30,mosquito:50, cuca:100},
					{name:'11/1/2016',palomilla:50,mosquito:60},
				],*/
				keys: {
					//value:['palomilla','mosquito']
					value:plagaValues
				},
				type: 'bar',

			},
			grid:{
				y:{
					show:true
				}
			},
			axis:{
				x: {
					label: 'Semana',
					type:'category',
					//categories:['4/1/2016','11/1/2016','18/1/2016','25/1/2016','1/2/2016','8/2/2016']
					categories: categoriesValues
				},
				y:{
					label:'Cantidad'
				},

			}

		});//chart
		console.log(result);

	}//GenerateChart

}

})();
