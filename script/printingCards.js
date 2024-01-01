
const printItems = async () => {

    const data = await getProducts();
    
    //Se trae del documento index.html :: <main id="contenedor-productos">
    const mostrador = document.getElementById("contenedor-productos");
    
    //Se genera la estantería donde se agregarán los libros.
    const estanteria = document.createElement('div');
    estanteria.classList.add('estanteria');
    
    data.forEach(product => {
        
        //Creación de un <div> que contendrá una tarjeta de identificación de un libro.
        const div = document.createElement('div');
        div.classList.add('item-card');   
        
        //Se crea una tarjeta que representa a un libro y se la inserta en el contenedor previamente creado.
        div.innerHTML+= newCard(product,div);

        //Se inserta cada libro generado en la estantería para mostrar.        
        estanteria.appendChild(div);
    });
    
    mostrador.appendChild(estanteria);
};

