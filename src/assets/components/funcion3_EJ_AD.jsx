const agregarIVA = (productos) => {
  return productos.map(producto => ({
    ...producto,
    precio: producto.precio * 1.21,  
  }));
};

export default agregarIVA;
