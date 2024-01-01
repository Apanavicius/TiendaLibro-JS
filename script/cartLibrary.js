
const addToCart = async (productSku, someCart) => {

  someCart.some(element => element.sku == productSku) ? upgradeProduct(productSku,someCart) 
                                                      : await addNewProduct (productSku,someCart);

    //Truthy: el producto ya existe, sólo se actualiza acumulado de unidades del producto.
    //Falsy: se agrega un nuevo artículo al carrito.
}

//. . . .

//El producto ya existe dentro del carrito, sólo se actualiza entonces su acumulado de unidades compradas.

const upgradeProduct = (productoSku,someCart) => {
  console.log('El producto existe en el carrito, se ingresó a función upgradeProduct');
  
  //Se consigue el índice del producto dentro del carrito.
  const index = someCart.indexOf( someCart.find(element => element.sku == productoSku) );  
  
  //Se accede al producto y se incrementa su contador de unidades.
  someCart[index].quantity++;

  console.log('Contenido carrito:',someCart);
}

//. . . .

// El producto es nuevo en el carrito, se agrega al final del mismo. Simulando un "queue".

const addNewProduct = async (productoSku,someCart) => {

  const stock = await getProducts();
  
  console.log('El producto no existe en el carrito, se ingresó a función addNewProduct');
  
  //Se genera un nuevo producto y se lo encola al final del array carrito.
  
  someCart.push(stock.find(element => element.sku == productoSku));
  
  console.log('Contenido carrito:',someCart);
  
}

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

//Actualización del contador de productos de la página principal, 

const counterRefresh = (someCart) => {
  document.getElementById('counter').innerText = someCart.reduce((acc, item) => acc + item.quantity, 0); 
}

//.  .  .  .  .  .  .  .  .  .  .  .  .  .

//Actualización del indicador del total de la compra.

const refreshTotal = (someCart) => {
  
  const result = someCart.reduce((acc, item) => acc + (item.price*item.quantity), 0);
  
  console.log("Gasto total:",result);

  return result;
}


//.  .  .  .  .  .  .  .  .  .  .  .  .  .

/* (Eliminación de un artículo)

1- Se detecta el botón pulsado.
 2- Luego busca el contenedor al cual pertenece el botón.
  3- Se elimina el contenedor del DOM.
   4- Eliminación del producto en el carrito. */
    
    const eraseItem = (e,someCart) => {
  
      //1
      console.log('Getting the button:',(e.target.parentElement.id));
      const elem = document.getElementById(e.target.parentElement.id); 
    
      //2 + 3
      document.getElementById(elem.parentElement.id).remove();
      console.log('Elemento removido del DOM.',elem.parentElement.id)
    
      //4
      const libroEncontrado = someCart.find ( (item) => item.sku == elem.parentElement.id );
      console.log("book founded! ",libroEncontrado);
      //console.log("Position in carrito:",someCart.indexOf(libroEncontrado));
      libroEncontrado && someCart.splice(someCart.indexOf(libroEncontrado.id),1);
      console.log("Elemento removido del carrito:",someCart);

      return someCart;
    }

//.  .  .  .  .  .  .  .  .  .  .  .  .  . 



    
  
    
    