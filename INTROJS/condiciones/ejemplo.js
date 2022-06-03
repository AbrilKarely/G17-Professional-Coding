// solicitar nombre de usuario, edad y examen de la vista, examen de manejo guardarlos
// en variable

var nameUser = prompt ("ingresa tu nombre").toLocaleLowerCase()
var edad = number (prompt ("ingresa tu edad"))
var vista = prompt ("tienes buena vista?").toLocaleLowerCase()
var examen = prompt ("aprobaste el examen de conducir").toLocaleLowerCase()




// crear condicion que valide si el ususario es mayor de edad, su examen es positivo
//y supero prueba de manejo

if(userName == "" && vista == "" && examen == "" && edad == 0){
    document.write ("estas variables estan vacias")
}
else if(edad >= 18 && vista == "si" && examen == "si"){
    document.write ("prueba superada, tienes tu licencia")
}
else if( edad <18 || vista == "no" || examen == "no"){
    document.write (nameUser, "lo siento no puedes obtener la licencia")
}