class InventarioTienda {
    constructor() {
        this.inventario = new Map(); // Usamos Map para almacenar productos y sus precios
    }

    // Agregar un producto nuevo
    agregarProducto(nombre, precio) {
        if (this.inventario.has(nombre)) {
            console.log(`El producto '${nombre}' ya existe en el inventario.`);
        } else {
            this.inventario.set(nombre, precio);
            console.log(`Producto '${nombre}' agregado con éxito.`);
        }
    }

    // Eliminar un producto
    eliminarProducto(nombre) {
        if (this.inventario.has(nombre)) {
            this.inventario.delete(nombre);
            console.log(`Producto '${nombre}' eliminado con éxito.`);
        } else {
            console.log(`El producto '${nombre}' no existe en el inventario.`);
        }
    }

    // Actualizar el precio de un producto
    actualizarPrecio(nombre, nuevoPrecio) {
        if (this.inventario.has(nombre)) {
            this.inventario.set(nombre, nuevoPrecio);
            console.log(`Precio de '${nombre}' actualizado a ${nuevoPrecio}.`);
        } else {
            console.log(`El producto '${nombre}' no existe en el inventario.`);
        }
    }

    // Mostrar todos los productos con sus precios
    mostrarInventario() {
        if (this.inventario.size === 0) {
            console.log("El inventario está vacío.");
        } else {
            console.log("Inventario de la tienda:");
            this.inventario.forEach((precio, nombre) => {
                console.log(`- ${nombre}: $${precio}`);
            });
        }
    }

    // Mostrar solo los nombres de los productos en stock
    mostrarStock() {
        if (this.inventario.size === 0) {
            console.log("No hay productos en stock.");
        } else {
            console.log("Productos en stock:");
            console.log([...this.inventario.keys()].join(", "));
        }
    }
}

// Instanciamos el inventario de la tienda
const tienda = new InventarioTienda();

// Ejemplo de uso

// Agregar productos
tienda.agregarProducto("Manzana", 1.2);
tienda.agregarProducto("Banana", 0.8);
tienda.agregarProducto("Naranja", 1.0);

// Mostrar inventario completo
tienda.mostrarInventario();  // Muestra todos los productos con precios

// Mostrar stock (solo nombres de productos)
tienda.mostrarStock();  // Muestra solo los nombres de los productos

// Intentar agregar un producto que ya existe
tienda.agregarProducto("Manzana", 1.3); // Da un mensaje de error

// Actualizar el precio de un producto existente
tienda.actualizarPrecio("Naranja", 1.5); 

// Intentar actualizar el precio de un producto inexistente
tienda.actualizarPrecio("Pera", 1.2);  // Da un mensaje de error

// Eliminar un producto
tienda.eliminarProducto("Banana");

// Intentar eliminar un producto inexistente
tienda.eliminarProducto("Pera"); // Da un mensaje de error

// Mostrar el inventario actualizado
tienda.mostrarInventario();
