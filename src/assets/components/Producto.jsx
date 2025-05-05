import { useState } from "react";
import mostrar_objetos from "./funcion1_EJ_AD"  //importa la funcion para mostrar los objetos
import agregarIVA from "./funcion3_EJ_AD";  //punto 3

function Producto() {
    const [productos, setProductos] = useState([
      { descripcion: "celular", precio: 250 },
      { descripcion: "laptop", precio: 600 },
      { descripcion: "tablet", precio: 180 },
      { descripcion: "mouse", precio: 40 },
      { descripcion: "monitor", precio: 150 },
    ]);

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
      

    return (
        <div>
          <h2>Lista de productos</h2>
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
        </div>
      );
      
    }


export default Producto;    // exporto el componente producto