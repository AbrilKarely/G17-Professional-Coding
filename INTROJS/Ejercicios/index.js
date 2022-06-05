// 1

// Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:\
// En caso afirmativo el usuario responderá si
// En caso contrario responderá no.
// Si el usuario responde si se escribirá por el documento «irás a la cárcel».
// Si el usuario responde no se escribirá por el documento web «irás a casa».

//var culpable = prompt ("¿eres culpable?").toLocaleLowerCase();

//if(culpable == ""){
    //document.write ("estas variables estan vacias")
//}
//else if(culpable == "si"){
    //document.write ("iras a la carcel")
//}//
//else if (culpable == "no"){
    //document.write("irás a casa")
//}//

// Escribir un programa que solicite al usuario una letra y, si es una vocal, 
// muestre el mensaje “es vocal”. Se debe validar que el usuario ingrese sólo un carácter. 
// Si ingresa un string de más de un carácter, informarle que no se puede procesar el dato.

//var letra = prompt("escribe una letra").toLocaleLowerCase();
//var longi = letra.length;

//if(letra == "a"||letra == "e"||letra == "i" ||letra == "o"||letra == "u"){
    //document.write ("Es una vocal")
//} else if (longi >1){
    //document.write ("No se puede procesar, recarga tu página")
//}else if (letra != "a"|| letra !="e"|| letra!="i"|| letra!="o"|| letra!="u"){
    //document.write ("No es una vocal")
//}//


//Crear un programa que permita al usuario elegir un candidato por el cual votar. 
//4e Las posibilidades son: candidato A por el partido rojo, candidato B por el partido verde, candidato C por el partido azul. 
// Según el candidato elegido (A, B ó C) 
// se le debe imprimir el mensaje “Usted ha votado por el partido [color que corresponda al candidato elegido]”. Si el usuario ingresa una  
// opción que no corresponde a ninguno de los candidatos disponibles, indicar “Opción errónea”.

//var partido = prompt ("Vota por el partido de tu preferencia, A por el rojo, B por el verde, C por el azul").toLocaleLowerCase();
//var a = "rojo"
//var b = "verde"
//var c = "azul"

//if(partido == "a"){
    //document.write("Usted a vitado por el partido rojo")
//} else if(partido == "b"){
    //document.write("usted ha votado por el partido verde")
//}else if (partido == "c"){
    //document.write ("Usted ha votado por el partido azul")
//} else if (partido == ""){
    //document.write ("Opción erronea")
//}//


// Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuanto le costará en función del topping que elija.
// El helado sin topping cuesta 1.90€.
// El topping de oreo cuesta 1€.
// El topping de KitKat cuesta 1.50€.
// El topping de brownie cuesta 0.75€.
// El topping de lacasitos cuesta 0.95€.
// En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. 
// » y a continuación informar del precio del helado sin ningún topping.
// Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).

//var topping = prompt ("Selecciona el helado de tu preferencia").toLocaleLowerCase();

//var ninguno = "1.90€"
//var oreo = "1€"
//var kitkat = "1.50€"
//var brownie = "0.75€"
//var lacasitos = "0.95€"

//if(topping == "oreo"){
    //document.write ("El precio del helado de oreo es 1.90€")
//}else if (topping == "kitkat")
//document.write ("El precio del helado de Kitkat es de 1.50€")
//else if (topping == "brownie"){
    //document.write ("El helado de brownie cuesta 0.75€")
//} else if (topping == "lacasitos"){
    //document.write ("El helado de lacasitos cuesta 0.95€")
//}else if (topping == "ninguno"){
    //document.write ("El precio de su helado es de 1.90€")
//} else if (topping == ""){
    //document.write ("Por favor ingresa un topping de tu preferencia")
//7} else if (topping != "oreo"|| topping != "kitkat" || topping !="brownie"|| topping !="lacasitos"|| topping!= "ninguno"){
    //document.write ("No tenemos ese topping, lo sentimos" + " el helado sin topping cuesta 1.90€")
//}//




// supongamos que tenemos un programa pagina o app 
// donde gestionamos tarjeta de credito.
// crear un programa que determine que tipo de pago podemos hacer dependiendo de la situacion de cada persona 
// Si mi deuda es mayor a mi balance,  y si me es permitido el sistema (pago mixto) me debe lanzar un warning de que debo acompletar mi pago con otro medio. (Tarjeta, deposito)
// si me deuda es mayor a mi balance y no tengo activo el pago mixto, debelanzarme un warning de hacer un deposito a mi cuenta.
// Si mi deuda es menor a mi balance y tengo pago mixto prendido, debo unicamente pagar con mi balance  mensaje de pago en una sola exhibicion. 


// solicitar datos!
//var nombre = "joel"
//var apellidos = "Lozano"
//var balance = 200
//var deuda = 400
//var pagoMixto = true // false
//var pais = "Peru"
//var taxes;


//if (pais == "peru" || pais == "basil"){ // Si usuario != México, taxes = 18.5
    //taxes = 18.5
    //var subTotal = deuda * 0.185
    //var total = deuda + impuesto
    //document.write ("el total es: " + total)
//} else 
    //document.write ("el total es: " + deuda)
//}//

//if(deuda > balance && pagoMixto){
    //document.write("Debe acompletar mi pago con otro medio. (tarjeta, deposito)")
//} else if (deuda > balance && pagoMixto){ // !=true){
    //document.write ("Haz un deposito a tu cuenta")
//} else if (deuda < balance && pagoMixto){
    //document.write ("tienes dinero suficiente, paga con tu balance")
//}//



// 
// Dependiendo el pais  cambia el impuesto. 
// en Mexico no se cobra impuestos
// peru y brazil se cobra. impuesto del 18.5%
// debe mostrar el subttotal y el total a pagar. 




