
const containerJs = document.getElementById ("container")
const button = document.getElementById("boton")


const nameUser = "Abril"
const edad = 27

function elements(){
    let div = document.createElement ("div") //tambien se puede crear un span, section, ect//
    let data = `<div> 
    <h1 class = "text"> Hola vengo de JavaScript </h1>
    <p>Hola soy ${nameUser} y tengo ${27}</p>
    </div>`
    div.innerHTML = data

    containerJs.appendChild(div)
}

button.addEventListener("click",(evento) =>{
    evento.preventDefault()
    elements()
})
