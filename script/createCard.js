
// La siguiente función se encarga de generar un elemento HTML, una tarjeta que representa a un libro.

const newCard = ({image,name,price,sku},anHtmlElement) => {
    
    anHtmlElement = `<img class="item-image" src=${image} alt="${name}">
                     <div class="item-detail">
                        <h3 class="item-name">${name}</h3>
                        <p class="item-price">$ ${price}</p>
                        <button id="${sku}"class="btn-add-item">Comprar!</button>
                     </div> `
    return anHtmlElement;
}