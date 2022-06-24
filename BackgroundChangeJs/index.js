

const containerJs = document.getElementById ("contenedor")
const buttonJs = document.getElementById ("button")
const titleJs = document.getElementById ("titulo")

const colors = ["#F72585", "#B5179E", "#2EEAD0", "#885CEC" , "#EC5CCD", "#EC5C97", "#ECA03E", "#3E66EC"]


const randomNumber = () => {
    return Math.floor(Math.random() * 8)
}

buttonJs.addEventListener("click" , (evento) =>{
    evento.preventDefault()
    containerJs.style.backgroundColor = colors[randomNumber()]
    titleJs.style.color = colors[randomNumber()]
    buttonJs.style.backgroundColor = colors[randomNumber()]

})


