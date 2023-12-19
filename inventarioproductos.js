// varibles globales GLOBALES

let productId = 1;
let products=[]; //usuarios 

//costructor objeto producto
class Producto { //Usuario
    constructor(nombre, tamaño, valor, peso){
    this.nombre= nombre;
    this.tamaño= tamaño;
    this.valor= valor;
    this.peso= peso;
    this.id = productId;
}

}

// INICIO FUNCIONES 
const agregarProduct = (producto) => {
    products.push(producto);
    productId++
  }

const mostrarProducto = () => {
    let nombresProductos = products.map(producto => `ID: ${producto.id} - Nombre: ${producto.nombre} - Tamaño: ${producto.tamaño} - Valor: ${producto.valor} - peso: ${producto.peso}` );
    if(nombresProductos.length > 0){ alert(nombresProductos.join("\n"))} else {alert("no hay productos registrados registrados")}
}


const eliminarProducto = (id) => {
    let existe = products.some( producto => producto.id === id);
    if(existe){ products = products.filter(producto => producto.id !== id);} else { alert("No existe ningun usurio con ese id")}
  }

// FIN FUNCIONES 

//MENU OPCIONES DE PRODUCTO
const menuProducto = () => {
  let estado = true;

  while (estado) {
    let opcion = parseInt(
      prompt(
        `Bienevenidos inventario de productos
            1- Mostrar producto
            2- Agregar producto
            3- Eliminar Producto
            4- Volver
            `
      )
    );



  // CONDICIONAL QUE MUESTRA LAS OPCIONES  
    switch (opcion) {
      case 1:
        mostrarProducto();
        break;
      case 2:
        let nombre = prompt("Ingrese el nombre del producto");
        let tamaño = prompt("Ingrese tamaño del producto");
        let valor = prompt("Ingrese el valor del producto");
        let peso = prompt("Ingrese el peso del producto");
        // crea una nueva instancia
        let producto = new Producto(nombre, tamaño, valor, peso);
        // agrega parametros productos
        agregarProduct(producto);
        break;
      case 3:
        let idProducto = parseInt(prompt("Ingrese ID prodcuto"));
        eliminarProducto(idProducto);
        break;
      case 4:
        estado = false;
        menuPrincipal();
        break;
      default:
        alert("Ingrese una opcion valida");
        break;
    }
  }
};





let encendido = true;
const menuPrincipal = () => {


  while (encendido) {
    let opcion = parseInt(
      prompt(
        `Bienevenidos nuestro administrador de producto
            1- Administrar productos
            2- Salir`
      )
    );



    switch (opcion) {
      case 1:
        // Menu productos gerneral
        menuProducto();
        break;

      case 2:
        encendido = false;
        break;
      default:
        alert("Ingrese una opcion valida");
        break;

       
    }
  }
};

// funcion que llama al menu principal
menuPrincipal();
