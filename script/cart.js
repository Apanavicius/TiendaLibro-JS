const definedKey = "cart";

let cartLoaded = readFromStorage(definedKey);

console.clear();

console.log("Cart Loaded:", cartLoaded);

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

// Impresión en pantalla de los productos cargados en el carrito

cartLoaded.length != 0
  ? printCart(cartLoaded)
  : document.querySelector(".carrito-vacio").classList.remove("disabled");

//Truthy: localStorage encontró la clave, por lo tanto imprime el contenido del carrito.
//Falsy: Se descubre una leyenda oculta dentro carrito.html (Ln41:45) que indica: "Carrito vacío".

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

function totalCostRefresh() {
  document.getElementById("total").innerText = `$${refreshTotal(cartLoaded)}`;
}

// Eliminación de un producto del carrito.

const eliminarProducto = (e) => {
  //Se elimina el nodo del DOM y se actualiza el carrito.
  cartLoaded = eraseItem(e, cartLoaded);

  //Se almacena en localStorage.
  writeToStorage(definedKey, cartLoaded);

  //Se actualiza el indicador del total de la compra.
  totalCostRefresh();
};

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

// Creación del nodo botonera para Vaciar contenido de carrito o finalizar compra.

const newKeypad = () => {
  const anHtmlElement = `<div class="botonera-lefthand">
                            <button id= "dump-cart" class="dump-cart">Vaciar Carrito</button>
                         </div>
                         <div class="botonera-righthand">
                            <div class="finishing">
                              <p>Total:</p>
                              <p id="total">$0.-</p>
                            </div>
                         <button id="buy" class="buy">Terminar Compra</button>
                         </div>`;

  return anHtmlElement;
};

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

// (Creación de la botonera inferior del carrito. Botones: Vaciar Contenido + Finalizar Compra)

const botonera = document.createElement("div");

botonera.classList.add("botonera");

botonera.innerHTML = newKeypad();

contenedorProductos.appendChild(botonera);

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

//Actualización del monto total de la compra.

totalCostRefresh();

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

// La siguiente función confirma si se desea eliminar el contenido del carrito de compras.

const areYouSure = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Vaciar Carrito!",
    //cancelButtonText: 'Mmmno, mejor vuelvo'
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarCarrito();
      Swal.fire({
        position: "center", //'top-end',
        icon: "success",
        title: "Se eliminó el carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
};

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

// (Vaciado del contenido del carrito)

const vaciarCarrito = () => {
  console.log("Se vacía el carrito de compras...");

  document.getElementById("carrito-productos").remove();
  //document.getElementsByClassName('carrito-productos').innerHTML = ''; <- No funciona!

  cartLoaded = [];

  totalCostRefresh();

  localStorage.clear();

  //writeToStorage(definedKey, cartLoaded); <-- ESTO ANDA.
};

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

const checkOut = () => {
  Swal.fire({
    position: "center", //'top-end',
    icon: "success",
    title: `Compra finalizada, monto: $${refreshTotal(cartLoaded)}.-`,
    showConfirmButton: false,
    timer: 1900,
  });
  vaciarCarrito();
};

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

// Eliminar un producto del carrito.

contenedorProductos.addEventListener("click", (e) => {
  e.target.classList.contains("cart-item-erase") && eliminarProducto(e);
});

// VACIAR CARRITO.

const btnEliminarTodos = document.getElementById("dump-cart");

btnEliminarTodos.addEventListener("click", (e) => {
  areYouSure();
});

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

// EFECTUAR COMPRA.

const btnBuy = document.getElementById("buy");

btnBuy.addEventListener("click", (e) => {
  checkOut();
});
