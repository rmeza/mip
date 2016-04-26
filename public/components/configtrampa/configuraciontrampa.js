(function() {

  'use strict';

  angular
  .module('authApp.configuraciontrampa', ['ui.router', 'satellizer'])
  .config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide) {

    $stateProvider
    .state('trampas', {
      url: '/trampas',
      templateUrl: '/components/configtrampa/configtrampaView.html',
      controller: 'ConfiguraciontrampaController as trampa'
    });
  })

})();
