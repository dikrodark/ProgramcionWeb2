var productos =[
    {nombre: 'camisa',precio:300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos',precio:400},
    {nombre:'sombrero',precio:200}
];

var carrito=[];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Actualizar Carrito\n";
    menu += (productos.length + 3) + ". Eliminar producto del carrito\n";
    menu += (productos.length + 4) + ". Regresar a menu Principal\n";

    return menu;

}


// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        alert(mensajeCarrito);
    }
}


function actualizarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío, no se puede actualizar.");
        return;
    }
    mostrarCarritoYTotal();
    var index = prompt("Ingrese el número del producto en el carrito que desea actualizar:") - 1;

    if (index >= 0 && index < carrito.length) {
        var lista = "Seleccione el nuevo producto:\n";
        for (var i = 0; i < productos.length; i++) {
            lista += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
        }

        var nuevoProducto = prompt(lista);
        nuevoProducto = Number(nuevoProducto) - 1;

        if (nuevoProducto >= 0 && nuevoProducto < productos.length) {
            carrito[index] = productos[nuevoProducto];
            alert("Producto actualizado en el carrito.");
            mostrarCarritoYTotal(); // mostrar carrito actualizado
        } else {
            alert("Opción inválida.");
        }
    } else {
        alert("Opción inválida.");
    }
}

function eliminarDelCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío, no se puede eliminar.");
        return;
    }
    mostrarCarritoYTotal();
    var index = prompt("Ingrese el número del producto en el carrito que desea eliminar:") - 1;

    if (index >= 0 && index < carrito.length) {
        var eliminado = carrito.splice(index, 1);
        alert('Producto "' + eliminado[0].nombre + '" eliminado del carrito.');
        mostrarCarritoYTotal(); // mostrar carrito actualizado
    } else {
        alert("Opción inválida.");
    }
}


// Bucle principal de la tienda
function iniciarTienda() {
    var opcion;
    do {
        opcion = Number(prompt(mostrarMenu()));

        if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 4) {
            console.log("Opción no válida, intenta de nuevo.");
        } else if (opcion >= 1 && opcion <= productos.length) {
            agregarAlCarrito(opcion - 1);
        } else if (opcion === productos.length + 1) {
            mostrarCarritoYTotal();
        } else if (opcion === productos.length + 2) {
            actualizarCarrito();  // aquí era eliminar
        } else if (opcion === productos.length + 3) {
            eliminarDelCarrito(); // aquí era actualizar
        }

    } while (opcion !== productos.length + 4);

    console.log("Gracias por visitar la tienda.");
}

// FUNCION verProductos PARA ADMINISTRADOR
function verProductos() {
    if (productos.length === 0) {
        alert("No hay productos en la tienda.");
        return;
    }

    var lista = "Productos disponibles:\n";
    for (var i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    alert(lista);
}

// FUNCION agregarProductoNuevo PARA ADMINISTRADOR

function agregarProductoNuevo() {
    var nombre = prompt("Ingrese el nombre del nuevo producto:");
    var precio = Number(prompt("Ingrese el precio del nuevo producto:"));

    if (nombre && !isNaN(precio) && precio > 0) {
        productos.push({ nombre: nombre, precio: precio });
        alert("Producto agregado con éxito.");
    } else {
        alert("Datos inválidos. No se agregó el producto.");
    }
}

// ===== MENÚ ADMINISTRADOR =====
function menuAdministrador() {
    var opcion;
    do {
        opcion = Number(prompt(
            "MENÚ ADMINISTRADOR:\n" +
            "1. Ver productos\n" +
            "2. Agregar nuevo producto\n" +
            "3. Regresar al menu principal"
        ));

        if (opcion === 1) {
            verProductos();
        } else if (opcion === 2) {
            agregarProductoNuevo();
        } else if (opcion !== 3) {
            alert("Opción inválida.");
        }

    } while (opcion !== 3);
}

// ===== MENÚ PRINCIPAL =====
function menuPrincipal() {
    var opcion;
    do {
        opcion = Number(prompt(
            "BIENVENIDO\n" +
            "1. Usuario\n" +
            "2. Administrador\n" +
            "3. Salir"
        ));

        if (opcion === 1) {
            iniciarTienda();
        } else if (opcion === 2) {
            menuAdministrador();
        } else if (opcion !== 3) {
            alert("Opción inválida.");
        }

    } while (opcion !== 3);

    alert("Programa finalizado.");
}

// Ejecutar el programa
menuPrincipal();
