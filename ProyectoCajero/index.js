const cuentas = [
    { nombre: "Abril", saldo: 200, password: 'helloworld' },
    { nombre: "Lourdes", saldo: 290, password: 'l33t' },
    { nombre: "María", saldo: 67, password: '123' }
]

function mostrarInicio(params) {
    const appEl = document.getElementById("app");
    const contentEl = document.createElement ("div");
    appEl.appendChild(contentEl);

    // mostrar mensaje de bienvenida
    const welcomeMessageEl = document.createElement("h1");
    welcomeMessageEl.innerText = "Bienvenido al banco su casa";
    contentEl.appendChild(welcomeMessageEl);

    // mostrar combo box y agregar la info de las cuentas

    // crear select, crear opciones y agrear opciones al select
    const selectAccountEl = document.createElement("select");
    cuentas.forEach((cuenta) => {
        var option = document.createElement("option");
        option.value = cuenta.nombre;
        option.text = cuenta.nombre;
        selectAccountEl.appendChild(option);
    })
    contentEl.appendChild(selectAccountEl);

    // mostrar botón de siguiente
    const nextbuttonEl = document.createElement("button");
    nextbuttonEl.innerText = "Siguiente";
    nextbuttonEl.addEventListener ("click", () =>{
        clearWindow();
        params.onNextBtnClick({
            onSigninBtnClick: () => {},
            onBackBtnClick: () => {
                clearWindow();
                mostrarInicio({
                    onNextBtnClick: mostrarLogin
                });
            },
        });
    })
    contentEl.appendChild(nextbuttonEl);

}

mostrarInicio ({
    onNextBtnClick: mostrarLogin,
});
// mostrarLogin()

function mostrarLogin(parametros) {
    const onSigninBtnClick = parametros.onSigninBtnClick;
    const onBackBtnClick = parametros.onBackBtnClick;
    
    const appEl = document.getElementById("app");
    const contentEl = document.createElement ("div");
    appEl.appendChild(contentEl);

    // crear mensaje de bienvenida y el nombre de la persona que ingreso
    const bienvenidaUsuarioEl = document.createElement("h1");
    bienvenidaUsuarioEl.innerText = "Bienvenido a tu cuenta";
    contentEl.appendChild(bienvenidaUsuarioEl);

    // mostrar cuadro de contraseña
    const passwordLabelEl = document.createElement ("label");
    passwordLabelEl.innerText = "Ingresa tu contraseña";
    contentEl.appendChild(passwordLabelEl);
    const passwordInputEl = document.createElement ("input");
    passwordInputEl.setAttribute("type", "password");
    contentEl.appendChild(passwordInputEl);

    // mensaje de error
    const errorMessageEl = document.createElement ("span")
    errorMessageEl.innerText = "Datos incorrectos";
    contentEl.appendChild(errorMessageEl);

    // boton de regreso
    const backButtonEl = document.createElement("button");
    backButtonEl.innerText = "Regresar";
    contentEl.appendChild(backButtonEl);
    backButtonEl.addEventListener ("click" , () =>{
        onBackBtnClick();
    })

    // boton de ingreso
    const loginButtonEl = document.createElement("button");
    loginButtonEl.innerText = "Ingresar";
    loginButtonEl.addEventListener("click", () => {
        clearWindow();
        onSigninBtnClick();
    })
    contentEl.appendChild(loginButtonEl);
}

// funcion para borrar toda la pantalla
function clearWindow (){
    const appEl = document.getElementById ("app");
    appEl.firstChild.remove();
}


// funcion para mostrar opciones 
function mostrarOpciones (){
    const appEl = document.getElementById ("app");
    const contentEl = document.createElement ("div");
    appEl.appendChild(contentEl);

    const selectOptionEl = document.createElement ("h1");
    selectOptionEl.innerText = "Selecciona una de las siguientes opciones";
    appEl.appendChild(selectOptionEl);

    // Agregar boton de consultar saldo 
    const ConsuSaldoBtn = document.createElement("button");
    ConsuSaldoBtn.innerText = "Consulta Saldo";
    contentEl.appendChild(ConsuSaldoBtn);
    ConsuSaldoBtn.addEventListener("click", () =>{
        clearWindow();
    })
// Agregar boton de ingresar monto
    const InMontoBtn = document.createElement("button");
    InMontoBtn.innerText = "Ingresa Monto";
    contentEl.appendChild(InMontoBtn);
    InMontoBtn.addEventListener("click", () =>{
        clearWindow();
    })

// agregar boton de retirar monto
    const RetiMontBtn = document.createElement("button");
    RetiMontBtn.innerText = "Retirar Monto";
    contentEl.appendChild(RetiMontBtn);
    RetiMontBtn.addEventListener("click", () =>{
        clearWindow();
    })

    // agregar boton de salir
    const Salirbtn = document.createElement("button");
    Salirbtn.innerText = "Salir";
    contentEl.appendChild(Salirbtn);
    Salirbtn.addEventListener("click", () =>{
        clearWindow();
    })

}





