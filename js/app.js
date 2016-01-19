var app = angular.module('universidadApp',['ngRoute' ]);//Habilita las funciones para movimientos entre paginas



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  
  

		$scope.profesores ={};
  

		$http.get('json/profesores.json').success(function(data){
			//codigo cuando es correcta la peticion
			$scope.profesores = data.profesores;
				
		});

	$scope.menuSuperior = 'parciales/menu.html';

	
	$scope.setActive = function( Opcion){
		$scope.mInicio 		= "";
		$scope.mProfesores	= "";
		$scope.mAlumnos		= "";

		$scope[Opcion] = "active";

	}


}]);