
//Se trae del documento carrito.html :: <main id="contenedor-productos">
const contenedorProductos = document.getElementById('contenedor-productos');

//. . . . . . . . . . . . . . . . . . . . . . . . . . . .

// (Generación de una tarjeta que identificará a un producto) 

const newCard = ({sku,image,name,quantity,price}) => {

  const div = document.createElement('div');
  div.innerHTML = `<div id=${sku} class="single-item">
                      <img class="cart-item-image" src=${image} alt="${name}">
                      <div class="cart-item-name">
                        <small>Título</small>
                        <h3>${name}</h3>
                      </div>
                      <div class="cart-item-qty">
                        <small>Cantidad</small>
                        <p id="item-counter">${quantity}</p>
                        <button id="item-qty-increase"><i class="bi bi-caret-up-fill"></i></button>
                        <button id="item-qty-decrease"><i class="bi bi-caret-down-fill"></i></button>
                      </div>
                      <div class="cart-item-price">
                        <small>Precio</small>
                        <p>$${price}</p>
                      </div>
                      <div class="cart-item-subtotal">
                        <small>SubTotal</small>
                        <p>$${price*quantity}</p>
                      </div>
                      <button id="btn-erase-${name}"><i class="bi bi-trash3-fill cart-item-erase"></i></button>
                  </div> `
    return div;
}
//. . . . . . . . . . . . . . . . . . . . . . . . . . . .

// (Impresión de productos en pantalla)
const printCart = (productsArray) => {
    
    //Se genera la estantería donde se agregarán los libros.
    const contenedorCarrito = document.createElement('div');
    contenedorCarrito.classList.add('contenedor-carrito');

    const carritoProductos = document.createElement('div');
    carritoProductos.classList.add('carrito-productos')
    carritoProductos.setAttribute("id","carrito-productos");

    productsArray.forEach(product => {
        carritoProductos.appendChild(newCard(product));
    });
    
    contenedorProductos.appendChild(contenedorCarrito.appendChild(carritoProductos));
    
};





