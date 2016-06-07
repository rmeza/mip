(function() {

  'use strict';

  angular
  .module('authApp.evento', ['ui.router'])
  .config(function($stateProvider) {

    $stateProvider
    
    .state('eventos', {
      url: '/eventos',
      templateUrl: '/components/eventos/eventosView.html',
      controller: 'EventoController as evento'
    })
  
  })

})();
