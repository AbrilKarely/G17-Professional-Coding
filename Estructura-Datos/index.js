

// Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).

//lista = [1,2,3,4,5,6,7,8,9,10]

//funcion returnElementos(lista, 4)

// resultado: [1,2,3,4]

// Datos de entrada: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],

class Pila {
    constructor() {
      this.elementos = []
      // this.tamano = 0
    }
  
    push(elemento) {
      this.elementos.push(elemento)
    }
  
    pop() {
      this.elementos.pop()
    }
  
    peek() {
      return this.elementos[this.elementos.length - 1]
    }
  
    size() {
      return this.elementos.length
    }
  
    display(pila, x) {
      if (this.size() === 0) {
        return "La pila esta vacia"
      }
  
      for(let i = 0; i < this.size(); i++) {
        console.log(this.elementos[i])
      }
    }
  
  
  }
  
  function obtenerElementosPorNumero(pila, numero) {
    let pilaTemp = pila
    console.log(pilaTemp)
  
    console.log(pilaTemp.size() - numero)
    console.log(pilaTemp.elementos.slice(0, pilaTemp.size() - numero))
    // for (let i=0; i < pilaTemp.size() - numero + 1; i++) {
    //   console.log(pilaTemp.size())
    //   console.log(pilaTemp.size() - numero + 1)
      
    // }
  
    // pilaTemp.display()
  
    return pilaTemp.elementos.slice(0, pilaTemp.size() - numero + 1)
  }
  
  let nuevaPila = new Pila()
  
  nuevaPila.push("Manzana")
  nuevaPila.push("Apio")
  nuevaPila.push("Cebolla")
  nuevaPila.push("Naranja")
  nuevaPila.push("Papaya")
  nuevaPila.push("Sandía")
  nuevaPila.push("Melón")
  
  console.log(obtenerElementosPorNumero(nuevaPila, 4))