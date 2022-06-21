// FOR
// ++ es de uno en uno, suma de uno en uno

// for (let index = 0; index <= 10; index ++) {
//     console.log (index)
// }

// for (let i = 10; i >=0; i--){
//     console.log (i)
// } 

// for (let i = 1; i <= 10; i++){
//     console.log ("7 x" , i, "=", 7*i)
// }


//Ejercicio//
// Crear un juego de loteria
// donde se le solicite un numero a un usuario
// y su el numero coincide con una serie de numeros
// escribiré "lotería"

let numero = parseInt (prompt("Dame un numero"));

for (let i= 1; i <= 50; i++){
    console.log (i) 
    if (numero == i){
        console.log ("loteria")
    }
}