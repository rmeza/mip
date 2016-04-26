(function() {

  'use strict';

  angular
  .module('authApp.configuraciontrampa', ['ui.router'])
  .config(function($stateProvider) {

    $stateProvider
    .state('trampas', {
      url: '/trampas',
      templateUrl: '/components/configtrampa/configtrampaView.html',
      controller: 'ConfiguraciontrampaController as trampa'
    })
    .state('newTrampa', {
      url: '/trampas/new',
      templateUrl: '/components/configtrampa/trampaAdd.html',
      controller: 'ConfiguraciontrampaController as trampa'
    })
    .state('editTrampa', {
      url: '/trampas/:id/edit',
      templateUrl: '/components/configtrampa/trampaEdit.html',
      controller: 'ConfiguraciontrampaController as trampa'
    })


  })

})();
