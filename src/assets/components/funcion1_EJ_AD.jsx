function mostrar_objetos(productos){

    productos.forEach(
        (p)=>{
            console.log("Producto: " + p.descripcion + " - Precio: " + p.precio);
        }
    );
}

export default mostrar_objetos;