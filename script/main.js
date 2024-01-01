const definedKey = "cart";

let cart = readFromStorage(definedKey);

// Se actualiza el contador de productos de la página principal, 
 
counterRefresh(cart);

//. . . . . . . . . . . . . . . . . . . . . . . . . . . .

// (Se agrega un producto al carrito al hacer clic en su correspondiente botón comprar.)

const agregarProducto = async (productoSku) => {

    // Incorporación del producto al carrito, exista o no.
        await addToCart(productoSku,cart);

    //Se actualiza por pantalla la cantidad de productos.
        counterRefresh(cart);

    //Se almacena en localStorage.
        writeToStorage(definedKey,cart);
}

//. . . . . . . . . . . . . . . . . . . . . . . . . . . .

//Asignación de evento al apretar botón "Comprar!" en cualquier artículo.

const contenedorProductos = document.getElementById('contenedor-productos');

contenedorProductos.addEventListener ('click', (e) => {
    
    e.target.classList.contains('btn-add-item') &&  agregarProducto(e.target.id);
});

//. . . . . . . . . . . . . . . . . . . . . . . . . . . . 