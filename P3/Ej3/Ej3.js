// Arrays para almacenar los productos y sus precios, he usado arrays
let productos = [];
let precios = [];

// Función para agregar un producto nuevo
function agregarProducto() {
    const nombre = document.getElementById('nombreProducto').value;
    const precio = parseFloat(document.getElementById('precioProducto').value);

    
    //Aqui compruebo si el nombre ya esta en el inventario con el indexof si no esta lo añado
    const indice = productos.indexOf(nombre);
    if (indice !== -1) {
        alert(`El producto '${nombre}' ya existe en el inventario.`);
    } else {
        productos.push(nombre);
        precios.push(precio);
        alert(`Producto '${nombre}' agregado con éxito.`);
    }
}

// Función para eliminar un producto
function eliminarProducto() {
    const nombre = document.getElementById('nombreEliminar').value;
    
    //al igual que antes comprobamos si el producto existe pero esta vez si si existe lo eliminamos
    const indice = productos.indexOf(nombre);
    if (indice !== -1) {
        productos.splice(indice, 1);
        precios.splice(indice, 1);
        alert(`Producto '${nombre}' eliminado con éxito.`);
    } else {
        alert(`El producto '${nombre}' no existe en el inventario.`);
    }
}

// Función para actualizar el precio de un producto existente
function actualizarPrecio() {
    const nombre = document.getElementById('nombreActualizar').value;
    const nuevoPrecio = document.getElementById('precioNuevo').value;

   
    //comprobamos si existe el producto que queremos actualizar
    const indice = productos.indexOf(nombre);
    if (indice !== -1) {
        precios[indice] = nuevoPrecio;
        alert(`Precio de '${nombre}' actualizado a $${nuevoPrecio}.`);
    } else {
        alert(`El producto '${nombre}' no existe en el inventario.`);
    }
}

// Función para mostrar todos los productos con sus precios
function mostrarInventario() {
    // Comprobamos que el inventario esté vacío
    if (productos.length === 0) {
        alert("El inventario está vacío.");
        return;
    }

    let inventario = "Inventario de la tienda:\n";
    
    // Usamos un bucle for para recorrer los productos
    for (let i = 0; i < productos.length; i++) {
        inventario += `- ${productos[i]}: $${precios[i]}\n`;
    }

    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = inventario;
}


function mostrarStock() {
    if (productos.length === 0) {
        alert("No hay productos en stock.");
        return;
    }

    let stock = "Productos en stock:\n";
    
    // Usamos un bucle for para recorrer los productos y añadirlos al stock
    for (let i = 0; i < productos.length; i++) {
        stock += `${productos[i]}`;
        
        // Añado coma y un espacio si no es el último elemento
        if (i < productos.length - 1) {
            stock += ", ";
        }
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = stock;
}



