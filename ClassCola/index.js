
class Cola{
    elemtnos = []

    add = function (elementos){
        return this.elementos.splice(0,0, elementos)
    }
    
    remove = function (){
        return this.elementos.pop()
    }

    isEmpty = function(){
        this.elementos.length = 0
    }

    size = function (){
        return this.elementos.length
    }
}

const cola = new cola ()


// CODIGO HASH //

const obj = {}
obj.name = "ramon"

console.log (obj.hasOwnProperty("last"))

const collection = new Map ()

collection.set("rafael", "1234-45656")
collection.set("ramon", "9403904930")
collection.set("maria", "90940904")
collection.set("valeria", "10345585")
collection.get ("rafael")
collection.size = 5

console.log(collection)


function phoneSearch (name){
    return collection.get (name)
}

console.log(phoneSearch ("valeria"))


//

console.log(collection)
const iterator = collection.keys()
function phoneSearch(name) {
  return collection.get(name)
}
function clearAll() {
  collection.clear()
  console.log(collection)
}
// collection.forEach((v,k) => {
//   console.log(`Key: ${k} | Value: ${v}`)
// })
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
console.log(phoneSearch("Valeria"))
console.log(clearAll())
