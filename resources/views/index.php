<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Manejo Integrado de Plagas</title>
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
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

      <div ui-view></div>

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
</html>
