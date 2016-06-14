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
    .state('newEvento', {
      url: '/eventos/new',
      templateUrl: '/components/eventos/eventosAdd.html',
      controller: 'EventoController as evento'
    })
    .state('newDetalleEvento', {
      url: '/detallesEvento/new',
      templateUrl: '/components/eventos/detallesAdd.html',
      controller: 'DetalleEventoController as detalleevento'
    })

  })

})();
