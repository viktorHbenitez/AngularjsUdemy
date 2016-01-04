(function(){//funcion encapsulada
    var app= angular.module('universidadApp', []);
    
    app.controller('listadoCtrl',['$scope',function($scope){
        //arreglo de valores String
        $scope.listado = ["viktor hugo benitez", "julio cesar benitez", "alfonso roman benitez", "maria perez"];
        
        //Arreglo de objetos javascript
        $scope.listadoProfesores ={
            profesores:[{
                nombre: "viktor hugo benitez",
                edad:"30",
                clase:"programacion"
            },{
                nombre:"julio cesar benitez",
                edad:"27",
                clase: "reposteria"
            },{
                nombre:"alfonso roman benitez bosques",
                edad:"34",
                clase: "ingeniero"
            }]
        }
        
        
        
    }]);
    
})();