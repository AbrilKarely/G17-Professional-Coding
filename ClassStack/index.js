
class Stack {
    elements = []
    push = function(element) {
      return this.elements.push(element)
    }
    pop = function() {
      return this.elements.pop()
    }
    isEmpty = function() {
      return this.elements.length === 0
    }
    empty = function() {
      return this.elements.length = 0
    }
    size = function() {
      return this.elements.length
    }
  }
  const pila = new Stack()
  pila.push('a')
  pila.push('b')
  pila.push('c')
  console.log(pila.size())
  console.log(pila.pop())
  console.log(pila.size())



  // listas enlazadas //


class NodoLista {
  constructor(dato) {
    this.dato = dato
    this.siguiente = null
  }
}
class ListaEnlazada {
  constructor(cabecera = null) {
    this.cabecera = cabecera
  }
  obtenerUltimo() {
    let ultimoNodo = this.cabecera
    if (ultimoNodo) {
      while (ultimoNodo.siguiente) {
        ultimoNodo = ultimoNodo.siguiente
      }
    }
    return ultimoNodo
  }
}
let nodo1 = new NodoLista(2)
let nodo2 = new NodoLista(5)
let nodo3 = new NodoLista(7)
nodo1.siguiente = nodo2
nodo2.siguiente = nodo3
let lista = new ListaEnlazada(nodo1)
let valorUltimoDato = lista.obtenerUltimo()["dato"]