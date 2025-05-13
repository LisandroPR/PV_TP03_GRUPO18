function Producto() 
{
  let productos_array = []; // arreglo para guardar los productos


  function agregar_producto(evento)  //se maneja dom virtual en react , NO MANEJAMOS LISTENER
  {
    evento.preventDefault(); // evitar recarga

    const nombre_producto = document.getElementById("nombre_producto").value;
    const precio = document.getElementById("precio").value;


    // CREACION DE UNA VARIABLE QUE CONTENGA EN NOMBRE Y PRECIO Y SE AGREGA AL ARRAY

    const producto = { nombre_producto, precio } ;
    productos_array.push(producto);  //mando la variable producto al array, al final
  

    // CREACION DEL ELEMENTO Y SE MUESTRA EN PANTALLA

    const lista_productos = document.getElementById("lista_productos");
    const linea = document.createElement("li");  
    linea.textContent = ("Producto: " + producto.nombre_producto + " - Precio: " + producto.precio);
    lista_productos.appendChild(linea);

  }

  function renderizar_lista_producto(productos_array)
  {
    //RECORRO Y CREO LA LISTA PARA MOSTRAR EN PANTALLA
    for (let i = 0; i < productos_array.length; i++)  //recorro o itero en arreglo nuevo  y creo una nueva lista
    {
      const producto = productos_array[i];

      const linea = document.createElement("li");  
      linea.textContent = ("Producto: " + producto.nombre_producto + " - Precio: " + producto.precio);
      lista_productos.appendChild(linea);
    }
  }


  function filtrar_productos(evento)
  {
    evento.preventDefault(); // Evitar recarga

    const lista_productos = document.getElementById("lista_productos");
    lista_productos.innerHTML = '';    //vacio la lista

    const precios_mayores = productos_array.filter(p => p.precio > 20);   //usando el filter creo un nuevo arreglo

    productos_array=precios_mayores;  //se asigna el arreglo con con los precios mayor a 20 al arreglo global
    renderizar_lista_producto(precios_mayores); //se renderiza la lista

    
  }

  function agregar_iva(evento)
  {
    evento.preventDefault(); // Evitar recarga

    const lista_productos = document.getElementById("lista_productos");
    lista_productos.innerHTML = '';    //vacio la lista

    // AUMENTO EL PRECIO DE LOS PRODUCTOS
    const precios_con_aumento = productos_array.map(p => {  //uso map para crear un nuevo arreglo pero modifacanco el precio

      p.precio = Number(p.precio);  //convierto los precios a numero porque no me dejaba hacer la operacion

      let porcentaje = (p.precio*21 )/100;   //% del 21%
      p.precio= (porcentaje+p.precio);
      return p;
    });

    productos_array=precios_con_aumento;  //asigno el arreglo con iva al global
    renderizar_lista_producto(precios_con_aumento); //se  renderiza la lista con los precios con aumento

  }

  function ordenar_productos(evento)
  {
    evento.preventDefault();

    const lista_productos = document.getElementById("lista_productos");
    lista_productos.innerHTML = '';

    const productos_ordenados = productos_array.sort((a, b) => a.precio - b.precio); // ordeno el precio de menor a mayor

    productos_array=productos_ordenados;
    renderizar_lista_producto(productos_ordenados); //se  renderiza la lista con los productos ordenados
  }
  
  function eliminar_producto_barato(evento)
  {
    evento.preventDefault();
    const lista_productos = document.getElementById("lista_productos");
    lista_productos.innerHTML = '';

    // BUSQUEDA DEL PRODUCTO DE MENOR VALOR

    if (productos_array.length > 0)  //entra si es que hay al menos un elemento en el arreglo
    {
      let menor_producto = productos_array[0];    //se asigna el primer elemento como el q tiene menor precio
      let indice_menor_precio = 0;      //guardo el indice 

      for (let i = 1; i < productos_array.length; i++) 
      {
        if (productos_array[i].precio < menor_producto.precio) //comprueba si el producto [i] del arreglo es menor que el primero o asignado
        {
          menor_producto = productos_array[i];  //asigno el producto menor a la variable menor_precio
          indice_menor_precio = i;    //guardo su indice para luego eliminarlo
        }

      }
  

      // NUEVO ARREGLO SIN EL MENOR PRODUCTO

      let nuevo_productos_array = []; // arreglo tenporal

      for(let i = 0; i < productos_array.length; i++)
      {
        if(i !== indice_menor_precio) // entra si es que es distinto al indice del elemeto a eliminar
        {
          nuevo_productos_array.push(productos_array[i]);
        }
      }

      productos_array = nuevo_productos_array;
      renderizar_lista_producto(nuevo_productos_array);
    }
   
   
  } 

  

  return (
    <>
      <h1>Lista de productos</h1>

      <form onSubmit={agregar_producto}> {/*dom virtaul*/}
        <input type="text" id="nombre_producto" name="nombre_producto" placeholder="Nombre del Producto" required/>
        <input type="number" id="precio" name="precio" placeholder="Precio" required />
        <button id="boton_agregar" type="submit">Agregar producto</button>
      </form>

      <form onSubmit={filtrar_productos}>
        <button id='boton_filtrar' type='submit'>Filtrar productos mayor a $20 </button>
      </form>

      <form onSubmit={agregar_iva}>
        <button id='bonton_iva' type='submit'>Agregar IVA 21%</button>
      </form>

      <form onSubmit={ordenar_productos}>
        <button id='bonton_ordenar' type='submit'>Ordenar</button>
      </form>

      <form onSubmit={eliminar_producto_barato}>
        <button id='bonton_eliminar' type='submit'>Eliminar mas barato</button>
      </form>

      <h2>Productos Agregados: </h2>
      <ul id="lista_productos"></ul>  {/*lista de productos en una lista desordenada*/}

    </>
  );
}

export default Producto;