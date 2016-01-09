(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  
	$scope.profesores = {};

  
  	$http.get('json/profesores.json').success(function(data){
  		//Codigo cuando es correcta la petición: peticion ajax
  		$scope.profesores = data.profesores;

  	});



}]);





})();
