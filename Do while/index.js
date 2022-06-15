
// ejecutar por lo menos una vez el codigo

//let opcion
    //do {
        //opcion = parseInt(prompt ("Dame el numero 2"));
        //if (opcion <= 0){
            //alert ("opcion invalidad")
        //}
   // } while (opcion !=2);


// crear un programa que valide la contraseña de un login

const correoValido = "abril@gmail.com"
const contraValida = "Nube"

let correo; 
let contra;

do {
    correo = prompt ("Ingresa tu correo");
    contra = prompt ("Ingresa tu contraseña");

} while (correo!= correoValido && contra != contraValida);

