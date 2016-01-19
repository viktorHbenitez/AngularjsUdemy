app.config(function ($routeProvider) {
	//configuracion de movimiento entre paginas
	//Se encarga de la navegacion de los segmentos creados a la pagina principal
	
	$routeProvider
		.when('/',{
				templateUrl: 'parciales/home.html',
				controller: 'inicioCtrl'
		})
		.when('/profesor', {
			templateUrl: 'parciales/profesores.html',
			controller: 'profesoresCtrl'
			
		})
		.when('/alumno', {
			templateUrl: 'parciales/alumnos.html',
			controller: 'alumnosCtrl'
		})
		.otherwise({ 
			redirectTo: '/' 
		});
});