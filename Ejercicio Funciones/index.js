
//Crear un programa donde solicitemos los datos de facturacion de productos
// Soliciar razon social - Nombre de la peronsa o La emprsaesa 
// los prodcutos con sus precios
// tiene que sumar el costo de los productos y sumar su impuesto
// impuesto 16% IVA/ IGV - 18%  
// mostrar la factura.  en un console.log. 

// Resultado: 
// Factura  = 
// Razon social : Joel Lozano 
// Productos  Iphne precio 500 dlares cantidad 2  , subtotal = 1000
// teclado precio 100 dolares cantidad 2 subtotal = 200
// libreta precio 2 dolares cantidad 5 subtotal = 10 
// total antes de impuesto  = 1210 
// total a pagar = 1110* 1.16 = 1403.6 dolares


// Estos puedes ser const porque son valores que no van a cambiar, si si cambian deben ser var o let//
const producto1Nombre = "iphone"
const producto1Precio = 120

const producto2Nombre = "tablet"
const producto2Precio = 1250

const producto3Nombre = "teclado"
const producto3Precio = 19

// Tarea 1. Solicitar datos

let razonSocial; //declaración de variable aunque no este definida 
let nombre; 
let RFC;
let pais;
let producto;
let impuesto;
let costoProducto;

function solicitarDatos (){
    razonSocial = prompt ("Dame la razón social");
    nombre = prompt ("Dame tu nombre");
    RFC = prompt ("Dame tu RFC");
    pais = prompt ("Pais de recidencia");
}

// Tarea 2. Elegir el producto , comprarlo // cuando es un return hasta ahí va a almacernar la función, debe ser llamado al final por alguien

function elegirProducto (){
    producto = parseInt(prompt("¿Qué producto quieres comprar? Elige el número 1. Iphone 2. Tablet, 3. Teclado")); //1 2 3
    if (producto ==1){
        impuesto = calcularImpuesto (producto1Precio)
        costoProducto = calcularTotal (producto1Precio, impuesto);
        return "El producto obtenido es un " + producto1Nombre + " con un valor de " + producto1Precio + "impuesto" + impuesto +  "total:" + costoProducto;
    } else if (producto ==2){
        impuesto = calcularImpuesto (producto2Precio);
        costoProducto = calcularTotal (producto2Precio, impuesto);
        return "El producto obtenido es un " + producto2Nombre + " con un valor de " + producto2Precio + "impuesto" + impuesto +  "total:" + costoProducto;
    } else if (producto ==3){
        impuesto = calcularImpuesto (producto3Precio);
        costoProducto = calcularTotal (producto3Precio, impuesto);
        return "El producto obtenido es un " + producto3Nombre + " con un valor de " + producto3Precio + "impuesto" + impuesto +  "total:" + costoProducto;
    } else {
        mostrarError ()
    }
}

// Tarea 3. Calcular el impuesto por país 

function calcularImpuesto (itemPrecio){
    if (pais == "Mexico"){
        return itemPrecio * 0.16
    } else {
        return itemPrecio * 0.18
    }
}

// Tarea 4. Calcular total

function calcularTotal (itemPrecio, impuesto){
    return itemPrecio + impuesto;
}


// Tarea 5. Mostrar resultado 

function mostrarResultado(){
    document.write (" La factura a nombre de ", nombre, " con razon social" , razonSocial, "y RFC", RFC);
    let mensajeProducto = elegirProducto ();
    document.write (mensajeProducto);
}

function mostrarError(){
    alert (" Error,opción invalida");
}

// Ejecutar funciones

solicitarDatos();
mostrarResultado ();
