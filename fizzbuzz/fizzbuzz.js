// 1) Imprimir todos los números entre el 100 y el 199.
//  2) Escribir un programa que muestre en pantalla los números del 1 al 100, 
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, 
// es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.


// for (let i= 100; i<= 199; i++){
//     console.log (i);
// }


for (let i= 1; i <= 100; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log ("fizzbuzz");
    } else if (i%3 == 0){
        console.log ("fizz");
    } else if (i%5 == 0){
        console.log ("buzz");
    } else {
        console.log (i);
    }
}

// otro ejemplo //


for (var i=1; i <10; i++){
    if (i%15 == 0) console.log ("fizzBuzz"); 
    else if (i%3 == 0) console.log ("Fizz");
    else if (i%5 ==0) console.log ("Buzz");
    else console.log (i);
}