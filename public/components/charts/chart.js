(function() {

  'use strict';

  angular
  .module('authApp.chart', ['ui.router'])
  .config(function($stateProvider) {

    $stateProvider

    .state('charts', {
      url: '/charts',
      templateUrl: '/components/charts/chartView.html',
      controller: 'ChartController as chart'
    })

  })

})();
