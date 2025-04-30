function agregarIVA(productos) {
    const productosIVA = productos.map((producto) => {
      return {
        descripcion: producto.descripcion,
        precio: (producto.precio * 1.21).toFixed(2),
      };
    });
  
    productosIVA.forEach((p) => {
      console.log(`Producto: ${p.descripcion} - Precio con IVA: $${p.precio}`);
    });
  }
  
  export default agregarIVA;
  