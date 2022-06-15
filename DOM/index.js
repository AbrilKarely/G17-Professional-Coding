const formJs = document.getElementById("form");

formJs.classList.add("formContainer")

const validation = (nameJs, apellidoJs, emailJs)=> {
    let errorName = document.getElementById("errorName")
    let errorApellido = document.getElementById("errorApellido")
    let errorEmail = document.getElementById ("errorEmail")
    if (nameJs === ""){
        errorName.classList.remove("oculto")
        errorName.classList.add ("error")
        setInterval(()=>{
            errorName.classList.remove("error")
            errorName.classList.add("oculto")}
        , 3000 )
    } else if (apellidoJs === ""){
        errorApellido.classList.remove ("oculto")
        errorApellido.classList.add ("error")
        setInterval(() =>{
            errorApellido.classList.remove("error")
            errorApellido.classList.add("oculto")}
        , 3000)
    } else if (emailJs === ""){
        errorEmail.classList.remove ("oculto")
        errorEmail.classList.add ("error")
        setInterval(() =>{
            errorEmail.classList.remove("error")
            errorEmail.classList.add("oculto")}
    , 3000)
}}


formJs.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    console.log("Enviaste el formulario")
    let nameJs = document.getElementById ("name").value
    let apellidoJs = document.getElementById ("apellido").value
    let emailJs = document.getElementById ("email").value
    console.log (nameJs, apellidoJs, emailJs)
    validation (nameJs, apellidoJs, emailJs)
})