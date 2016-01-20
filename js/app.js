(function(){

	var app = angular.module('ejemploApp', []);

	app.controller('mainCtrl', ['$scope','$http', function ($scope, $http) {

		$scope.geo = {};

		$http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').success(function(data){

				$scope.geo = data;

		});

		
	}]);


})();