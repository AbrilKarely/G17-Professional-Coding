let item1 = ["Casio", 1000, "Este reloj es bonito, barato y práctico", "imagen"];
let item2 = ["Citizen", 2500, "Reloj mecanico con maquinaria Suiza", "imagen"];
let item3 = ["Nivada", 3500, "Este reloj es bonito y lujoso", "imagen"]
let item4 = ["Invicta", 3500, "Este reloj es bonito y lujoso", "imagen"]



let stock = [item1, item2, item3, item4, item2, item1] // este es un for anidado
let sectionItem = document.getElementById("items")
var carrito =0;

for (let i = 0; i < stock.length; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "col-12 col-sm-6 col-md-4 col-lg-4")
    let card = `
            <div class="card" style="width: 18rem;">
            <img src="https://cdn.shopify.com/s/files/1/1681/1767/files/casio_a_168_plateado_mujer_large.jpg?v=1590098058" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${stock[i][0]}</h5>
            <p class="card-text">${stock[i][2]}</p>
            <p class ="ps2"> $${stock[i][1]}
            <button class="btn btn-warning" id="button${i}" onclick="agregarItem()">Comprar</button>
                </div>
                </div>
                `

    div.innerHTML = card
    sectionItem.appendChild (div);

}

function agregarItem (){
    carrito++;
    document.getElementById("carritoCount").textContent = carrito

}





// MANERA LARGA DE RESOLVER LA FUNCION DEL CARRITO//

// function agregarItem (){
//     carrito++;
//     let numeroSpan = document.getElementById("carritoCount");
//     numeroSpan.innerText = carrito;

// }


// OTRA MANERA DE RESOLVERLO//

// let sectionItems = document.getElementById ("items")
// let div = document.createElement ("div")
// let card = `
// <div class="card" style="width: 18rem;">
// <img src="https://cdn.shopify.com/s/files/1/1681/1767/files/casio_a_168_plateado_mujer_large.jpg?v=1590098058" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${item1[0]}</h5>
//   <p class="card-text">${item1[2]}</p>
//   <a href="#" class="btn btn-primary" id="boton1">Comprar</a>
// </div>
// </div> ` 

// div.innerHTML = card
// sectionItems.appendChild (div);