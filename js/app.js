//modulo global de la interfaz
var app = angular.module('universidadApp',[]);

//manejan una parte de la pagina o su totalidad
app.controller('profesorCtrl',function(){
    this.profesor = profesoresData;
    
    
});



var profesoresData= {
    nombre: "Juan Carlos Pineda",
    bio: "Saludos estudiantes , mi nombre es juan carlos, encantado de conocerte, soy un apasionado instructor     ", 
    edad:"27",
    foto:"img/juancarlos.jpg"
}