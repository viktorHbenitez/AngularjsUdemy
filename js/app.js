//modulo global de la interfaz
var app = angular.module('universidadApp',[]);

//manejan una parte de la pagina o su totalidad
app.controller('profesorCtrl',function($scope){
    $scope.profesor = profesoresData;
    $scope.editando = {};//variable de scope vacia
   
    $scope.editarProferos = function(){
        angular.copy($scope.profesor,$scope.editando);
    }
    $scope.GuardarCambio = function(){
        angular.copy($scope.editando,$scope.profesor);
    }
    $scope.CancelarCambio = function(){
        $scope.editando={};
    }
    
});



var profesoresData= {
    nombre: "Juan Carlos Pineda",
    bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.", 
    edad:"27",
    foto:"img/juancarlos.jpg"
}