const containerJs = document.getElementById ("container")

function elements(){
    let div = document.createElement ("div") //tambien se puede crear un span, section, ect//
    let data = `<div> 
    <h1 class = "text"> Hola vengo de JavaScript </h1>
    <p>Lorem ipsum dolor sit amet consectur</p>
    </div>`
    div.innerHTML = data

    containerJs.appendChild(div)
}

elements()
