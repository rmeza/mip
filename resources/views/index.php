<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Ricardo Meza<ingricadomeza@gmail.com>" />
        <link rel="icon" type="image/x-icon" href="favicon.ico">

        <title>Manejo Integrado de Plagas</title>
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
        <style>
        .navbar { border-radius:0; }
        </style>
    </head>
    <body ng-app="authApp">
      <!-- NAVIGATION -->
      <nav class="navbar navbar-inverse" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" ui-sref="#">Sistema MIP</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a ui-sref="inicio">Inicio</a></li>
            <li><a ui-sref="trampas">Trampas</a></li>
            <li><a ui-sref="eventos">Eventos</a></li>
            <li><a ui-sref="graficos">Graficos</a></li>
            <li><a ui-sref="users">Usuarios</a></li>
            
            <li>  <select name="idplanta" class="form-control" ng-model="selectedClasificacionTrampa.id"
                ng-options="planta.id as planta.name for planta in planta.plantas"></select></li>
          </ul>


          <ul class="nav navbar-nav navbar-right" align="right">
            <li><a ui-sref="logout">
                <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                Salir</a>
            </li>
          </ul>
          <p class = "navbar-text navbar-right">Hola!, {{currentUser.name}}</p>
        </div>
      </nav>

      <div  class="col-md-10" ui-view></div>

    </body>

    <!-- Application Dependencies -->
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="node_modules/satellizer/satellizer.js"></script>

    <!-- Application Scripts -->
    <script src="scripts/app.js"></script>
    <script src="scripts/authController.js"></script>
    <script src="scripts/userController.js"></script>
    <script src="scripts/logoutController.js"></script>
    <script src="scripts/configuraciontrampaController.js"></script>
    <script src="/components/configtrampa/configuraciontrampa.js"></script>
</html>
