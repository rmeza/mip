(function() {

	'use strict';

	angular
	.module('authApp')
	.controller('ChartController',ChartController)

	function ChartController($http, $auth, $rootScope,$state,$scope) {

		var vm = this;

		$http.get('api/clasificaciontrampa').success(function(clasificaciones) {
			vm.clasificaciones = clasificaciones;
		}).error(function(error) {
			vm.error = error;
		});


		vm.Graph = function() {
			var filters = {
				idPlanta:$rootScope.selectedPlanta.id,
				dateStart: vm.datestart,
				dateEnd: vm.dateend,
				clasificacionTrampa: vm.selectedClasificacionTrampa
			};
			console.log(filters);

			$http({
				method: 'GET',
				url: 'api/showweekly/filter',
				params: filters,
				headers: {'Content-Type': 'application/json'}
			}).success(function(response) {
				console.log(response);

			}).error(function(response) {
				console.log(response);
			});

		};


		var chart = c3.generate({
			bindto: '#chart',
			data: {

				json:[
					{name:'4/1/2016',palomilla:30,mosquito:50},
					{name:'11/1/2016',palomilla:50,mosquito:60},
					{name:'18/1/2016',palomilla:60,mosquito:90},
					{name:'25/1/2016',palomilla:80,mosquito:40},
					{name:'8/2/2016',palomilla:70,mosquito:100},

				],
				keys: {
					value:['palomilla','mosquito']
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
					label: 'Semanas',
					type:'category',
					categories:['4/1/2016','11/1/2016','18/1/2016','25/1/2016','1/2/2016','8/2/2016']
				},
				y:{
					label:'Cantidad'
				},

			}

		});

	}

})();
