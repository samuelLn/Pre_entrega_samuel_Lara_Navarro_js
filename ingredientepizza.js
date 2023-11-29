
//////////////////////////////////// BLOQUE MENSAJE DE Bienvenida

// Mensajes para interface usurio
const mensajeBievenida = "+---[ BIENVENIDO A P-ZZA ]---+" + "\n" + "Pizzería que te permite armar tu pizza con los mejores ingredientes disponibles en nuestro catálogo";
const intruccionesArmarPizza = "Para armar tu pizza, debes seleccionar el tamaño de la masa y elegir tres ingredientes para tu producto. Todos los ingredientes tienen distintos valores que se muestran en la pantalla. \n¡Empecemos con tu pedido!";

// mesajes iniciales
alert (mensajeBievenida);
alert(intruccionesArmarPizza);

//////////////////////////////////// fIN BLOQUE MENSAJE DE Bienvenida


//////////////////////////////////// BLOQUE SELECCION FORMATO
// Variables Formatos Pizza
const pizzaChica = 1;
const pizzaMediana = 2;
const pizzaFamiliar = 3;

// listado de formatos
const mensajeListadoTamanos = "1. Pizza Individual ==== 4000 CLP.\n2. Pizza Mediana ==== 7000 CLP.\n3. Pizza Familiar ==== 12000 CLP.";
const mesajeFinalFormato = "Perfecto Vamos a seleccionar los ingredientes"

// Inicializar el formato de pizza fuera del bucle
let formatoPizza;

// Bucle 
while (true) {
    // Prompt para ingresar tamaños de pizza
    formatoPizza = parseInt(prompt("Ingrese el número del tamaño de la Pizza:\n" + mensajeListadoTamanos));

    // Condición para detectar la elección de formato de pizza
    if (formatoPizza === pizzaChica || formatoPizza === pizzaMediana || formatoPizza === pizzaFamiliar) {
        break; // Salir del bucle si la opción es válida
    } else {
        alert("No existe esa opción. Por favor, ingrese una opción válida.");
    }
}

// Convertir el número de formato a su nombre correspondiente
if (formatoPizza === 1) { 
    formatoPizza = "Pizza individual"; 
} else if (formatoPizza === 2) { 
    formatoPizza = "Pizza Mediana"; 
} else if (formatoPizza === 3) { 
    formatoPizza = "Pizza Familiar";
} 



const resumenFormatoSelecionado = "El formato seleccionado es." + "\n" + formatoPizza;
alert(mesajeFinalFormato + "\n" + resumenFormatoSelecionado  )
console.log(resumenFormatoSelecionado);
//////////////////////////////////// FIN BLOQUE SELECCION FORMATO



//////////////////////////////////// BLOQUE SELECCION INGREDIENETES
const mensajeProductoNoExiste = "No existe esa opción"; 
const mensajeListadoIngredientes = "10. Queso Mozzarella ==== 1000 CLP.\n20. Queso Parmesano ==== 1200 CLP.\n30. Peperoni ==== 800 CLP.\n40. Jamon ==== 900 CLP.";
const instruccionesArmarPizza = "Para armar tu pizza, debes seleccionar el tamaño de la masa y elegir tres ingredientes para tu producto. Todos los ingredientes tienen distintos valores que se muestran en la pantalla. ¡Empecemos con tu pedido!";
//alert(instruccionesArmarPizza);

// Variables opciones ingredientes
const quesoMozzarella = 10;
const quesoParmesano = 20;
const peperoni = 30;
const jamon = 40;


// Función para mostrar mensaje de producto no existente
function mensajeNoProducto() {
    alert(mensajeProductoNoExiste);
}

// Función para obtener el nombre del ingrediente
function obtenerNombreIngrediente(opcion) {
    switch (opcion) {
        case quesoMozzarella:
            return "Queso Mozzarella";
        case quesoParmesano:
            return "Queso Parmesano";
        case peperoni:
            return "Peperoni";
        case jamon:
            return "Jamon";
        default:
            mensajeNoProducto();
    }
}

// Función para obtener una opción válida
function obtenerOpcionValida(mensaje) {
    let opcion = parseInt(prompt(mensaje));
    while (isNaN(opcion) || (opcion !== quesoMozzarella && opcion !== quesoParmesano && opcion !== peperoni && opcion !== jamon)) {
        mensajeNoProducto();
        opcion = parseInt(prompt(mensaje));
    }
    return opcion;
}

// Prompt para ingresar ingredientes
let primerIngrediente = obtenerOpcionValida("Ingresa el número del primer ingrediente que desees.\n" + mensajeListadoIngredientes);
let segundoIngrediente = obtenerOpcionValida("Ingresa el número del segundo ingrediente que desees.\n" + mensajeListadoIngredientes);
let tercerIngrediente = obtenerOpcionValida("Ingresa el número del tercer ingrediente que desees.\n" + mensajeListadoIngredientes);

// Obtener nombres de ingredientes
let nombrePrimerIngrediente = obtenerNombreIngrediente(primerIngrediente);
let nombreSegundoIngrediente = obtenerNombreIngrediente(segundoIngrediente);
let nombreTercerIngrediente = obtenerNombreIngrediente(tercerIngrediente);

// Construcción del resumen los ingredientes
let resumenIngredientesSeleccionados = "Los ingredientes seleccionados son: \n" + nombrePrimerIngrediente + "\n" + nombreSegundoIngrediente + "\n" + nombreTercerIngrediente + "." +  "\n" + "Has click en Aceptar para ver el resumen de tu pedido *";
console.log(resumenIngredientesSeleccionados);
alert(resumenIngredientesSeleccionados);

//////////////////////////////////// FIN BLOQUE SELECCION INGREDIENETES

//////////////////////////////////// CALCULO FINAL PRECIO
//formatoPizza = "Pizza Familiar";
// Variables formato precios 
const precioPizzaIndividual = 4000;
const precioPizzaMediana = 7000;
const precioPizzaFamiliar = 12000;

// comparador de formato
let valorFormato;

if (formatoPizza === "Pizza individual") { 
    valorFormato = precioPizzaIndividual;  
} else if (formatoPizza === "Pizza Mediana") {  // Corregido el operador de comparación
    valorFormato = precioPizzaMediana; 
} else if (formatoPizza === "Pizza Familiar") { 
    valorFormato = precioPizzaFamiliar;
} else {
    // Manejar el caso en que 'formatoPizza' no coincide con ninguna opción válida
    console.log("Formato de pizza no válido.");
}

// Si 'formatoPizza' no es válido, 'totalValorPizza' no se calculará correctamente
const totalValorPizzaFormato = valorFormato;

// Imprimir el resultado solo si 'formatoPizza' es válido
//if (valorFormato !== undefined) {
    //console.log("El total del valor de la pizza es: " + totalValorPizza);
//}


//------------------------------------- calculo total ingredientes

//nombrePrimerIngrediente = "Queso Mozzarella";
//nombreSegundoIngrediente = "Peperoni";
//nombreTercerIngrediente =  "Queso Parmesano"


// Valores ingredientes
const precioMozzarella = 1000;
const precioParmesano = 1200;
const precioPeperonni = 800;
const precioJamon = 900;


// comparador primer ingredienetes ---------------------------->
let valorPrimerIngrediente;

if (nombrePrimerIngrediente === "Queso Mozzarella") { 
    valorPrimerIngrediente = precioMozzarella;  
} else if (nombrePrimerIngrediente === "Queso Parmesano") {  // Corregido el operador de comparación
    valorPrimerIngrediente = precioParmesano; 
} else if (nombrePrimerIngrediente === "Peperoni") { 
    valorPrimerIngrediente =precioPeperonni;
} else if (nombrePrimerIngrediente === "Jamon"){
    valorPrimerIngrediente =precioJamon;
}else{
    // Manejar el caso en que 'formatoPizza' no coincide con ninguna opción válida
    console.log("Formato de pizza no válido.");
}

// comparador segundo ingredienetes ---------------------------->
let valorSegundoIngrediente;

if (nombreSegundoIngrediente === "Queso Mozzarella") { 
    valorSegundoIngrediente = precioMozzarella;  
} else if (nombreSegundoIngrediente === "Queso Parmesano") {  // Corregido el operador de comparación
    valorSegundoIngrediente = precioParmesano; 
} else if (nombreSegundoIngrediente === "Peperoni") { 
    valorSegundoIngrediente =precioPeperonni;
} else if (nombreSegundoIngrediente === "Jamon"){
    valorSegundoIngrediente =precioJamon;
}else{
    // Manejar el caso en que 'formatoPizza' no coincide con ninguna opción válida
    console.log("Formato de pizza no válido.");
}

// comparador tercer ingredienetes ----------------------------> 
let valorTercerIngrediente;

if (nombreTercerIngrediente === "Queso Mozzarella") { 
    valorTercerIngrediente = precioMozzarella;  
} else if (nombreTercerIngrediente === "Queso Parmesano") {  // Corregido el operador de comparación
    valorTercerIngrediente = precioParmesano; 
} else if (nombreTercerIngrediente === "Peperoni") { 
    valorTercerIngrediente =precioPeperonni;
} else if (nombreTercerIngrediente === "Jamon"){
    valorTercerIngrediente =precioJamon;
}else{
    // Manejar el caso en que 'formatoPizza' no coincide con ninguna opción válida
    console.log("Formato de pizza no válido.");
}

// Si 'formatoPizza' no es válido, 'totalValorPizza' no se calculará correctamente



const totalValorIngredientes = valorPrimerIngrediente + valorSegundoIngrediente + valorTercerIngrediente ;
//console.log(totalValorIngredientes)

const valorTotalPedido = totalValorPizzaFormato + totalValorIngredientes;
console.log(valorTotalPedido)
//////////////////////////////////// FIN CALCULO FINAL PRECIO




//////////////////////////////////// RESUMEN FINAL DEL PRODUCTO
const mensajeResumenpedidoFinal = "Tu pizza ya está lista.";
const mensajeDespedida = "Gracias por tu compra. \n ¡Disfruta de tu pizza!";

const nombreFormatoValor = formatoPizza + "   --------------> " + valorFormato + " CLP";
const nombreValorProducto1 = nombrePrimerIngrediente + "   --------------> " + valorPrimerIngrediente + " CLP" + "\n";
const nombreValorProducto2 = nombreSegundoIngrediente + "  --------------> " + valorSegundoIngrediente + " CLP" + "\n";
const nombreValorProducto3 = nombreTercerIngrediente + "   --------------> " + valorTercerIngrediente + " CLP" + "\n";  
const totalIngredientesValor = nombreValorProducto1 + nombreValorProducto2 + nombreValorProducto3 ;



alert(mensajeResumenpedidoFinal + "\n" + "FORMATO PIZZA" + "\n" + nombreFormatoValor + "\n" + "IMGREDIENTES" + "\n" + totalIngredientesValor + "\n" + "TOTAL PEDIDO: " + valorTotalPedido + " CLP");
alert(mensajeDespedida);
////////////////////////////////////FIN RESUMEN FINAL DEL PRODUCTO


//resumenIngredientesSeleccionados
//resumenFormatoSelecionado