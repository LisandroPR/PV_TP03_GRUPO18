import { useState } from "react";
import mostrar_objetos from "./funcion1_EJ_AD";  // Importa la función para mostrar los objetos
import agregarIVA from "./funcion3_EJ_AD";  // Punto 3

function Producto() {
  const [productos, setProductos] = useState([
    { descripcion: "celular", precio: 250 },
    { descripcion: "laptop", precio: 600 },
    { descripcion: "tablet", precio: 180 },
    { descripcion: "mouse", precio: 40 },
    { descripcion: "monitor", precio: 150 },
  ]);

  const [nuevoProducto, setNuevoProducto] = useState({ descripcion: '', precio: '' });  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filtrarproductos = () => {
    const filtrados = productos.filter(p => p.precio > 100);
    setProductos(filtrados);
  };

  const agregarivah = () => {
    const conIVA = agregarIVA([...productos]);
    setProductos(conIVA);
  };

  const eliminarPrecio = () => {
    if (productos.length === 0) return;
    const menor = Math.min(...productos.map(p => p.precio));
    const nuevos = productos.filter(p => p.precio !== menor);
    setProductos(nuevos);
  };

  const ordenarProductos = () => {
    const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(ordenados);
  };

  const agregarProducto = () => {
    if (nuevoProducto.descripcion && nuevoProducto.precio) {
      setProductos([
        ...productos,
        {
          descripcion: nuevoProducto.descripcion,
          precio: parseFloat(nuevoProducto.precio),
        }
      ]);
      setNuevoProducto({ descripcion: '', precio: '' });  // Limpiar el formulario
    }
  };

  return (
    <div>
      <h1>Lista de productos</h1>
      <ul>
        {productos.map((p, index) => (
          <li key={index}>
            {p.descripcion} - ${p.precio}
          </li>
        ))}
      </ul>
      <button onClick={filtrarproductos}>Filtrar</button>
      <button onClick={agregarivah}>Agregar IVA</button>
      <button onClick={eliminarPrecio}>Eliminar Menor Precio</button>
      <button onClick={ordenarProductos}>Ordenar</button>

      <div>
        <h3>Agregar nuevo producto</h3>
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={nuevoProducto.descripcion}
          onChange={handleChange}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={nuevoProducto.precio}
          onChange={handleChange}
        />
        <button onClick={agregarProducto}>Agregar Producto</button>
      </div>
    </div>
  );
}

export default Producto;