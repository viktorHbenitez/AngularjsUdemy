(function(){//funcion encapsulada
    var app= angular.module('universidadApp', []);
    
    app.controller('listadoCtrl',['$scope',function($scope){
        
        $scope.listado = ["viktor hugo benitez", "julio cesar benitez", "alfonso roman benitez", "maria perez"];
        
        
    }]);
    
})();