
//let indice = 1

//while (indice <= 10) {
    //console.log (indice);
    //indice = indice + 1; // indice++; suma uno a la variable//
//}//

//ejercicio1//
// imprimir en consola su nombre 10 veces

//let i = 1
//while (i <= 10){
    //console.log ("Abril");
    //i++;
//}//

//ejercicio2//
//crear un ciclo while que
//sume de dos en dos, desde el 2 hasta el 50

//let i = 2
//while (i <= 50){
    //document.write (i);
    //i = 1+1;
//}//

//Segunda forma de solucionarlo abreviado

//let i = 2
//while (i <= 50){
    //console.log (i);
    //i += 2;
//}//

// tercera forma pero de uno en uno

//let i = 2
//while (i <= 50){
    //console.log (i)
    //i++; 
//}//

// Ejercicio 3, escribe un programa que realice la tabla de multiplicar del numero 3
// 3 x 1 = 3
// 3x 2 = 6


//let i = 1

//while (i<= 10){
    //console.log ("3 x" , i , "=", 3*i);
    //i++;
//}//

//segunda parte es repetir 3 veces la multiplicacion 

//let j = 1
//while (j<=3){
//let i = 1
//while (i<= 10){
    //console.log ("3 x" , i , "=", 3*i);
    //i++;
    //}
    //j++;
//}//

// crear un programa que pinte en consola un arbolito de navidad
// *
// **
// ***
// ****
// *****


let i = 0
while (i <=5){
    let string= ""
    let j = 0
    while (j<=i){
        string += "*"
        j++
    }
    i++
    console.log(string)
}


