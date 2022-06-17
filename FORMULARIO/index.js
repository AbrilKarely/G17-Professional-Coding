// const user = "abril"
// const password = "nube"

// function login (usuario,contra){
//     if (usuario === "" || contra == ""){
//         console.log ("No pudimos validar los datos, intentalo nuevamente")
//     } else if (user == usuario && contra == password){
//        console.log ("Bienvenido")
//     } else {
//         console.log ("Error, intenta nuevamente")
//     }
// }

// login (usuario, password)

const formJs = document.getElementById("form")


formJs.addEventListener("submit", function SubmitForm(evento) {
    evento.preventDefault()
    console.log(evento)
    const usuarioJs = document.getElementById("usuario").value
    const contraJs = document.getElementById("password").value
    console.log({ usuarioJs, contraJs })
    validacion(usuarioJs, contraJs)
})


const usuarioMaestro = "abril"
const contraMaestro = "nube"

function validacion(usuario, contraseña) {
    const mensajeEl = document.getElementById("mensaje")
    console.log(mensajeEl)
    if (usuario == "" || contraseña == "") {
        mensajeEl.innerText = "No se pudieron validar los datos"
    } else if (usuario == usuarioMaestro && contraseña == contraMaestro) {
        mensajeEl.innerText = "Bienvenido"
    } else {
        mensajeEl.innerText = "No se pueden validar los datos"
    }
}

