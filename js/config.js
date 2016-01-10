app.config(function ($routeProvider) {
	//configuracion de movimiento entre paginas
	//Se encarga de la navegacion de los segmentos creados a la pagina principal
	
	$routeProvider
		.when('/',{
				templateUrl: 'parciales/home.html',
		})
		.when('/profesor', {
			templateUrl: 'parciales/profesores.html',
			
		})
		.when('/alumno', {
			templateUrl: 'parciales/alumnos.html',
		})
		.otherwise({ 
			redirectTo: '/' 
		});
});