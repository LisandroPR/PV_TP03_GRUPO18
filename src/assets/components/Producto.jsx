import mostrar_objetos from "./funcion1_EJ_AD"  //importa la funcion para mostrar los objetos
import agregarIVA from "./funcion3_EJ_AD";  //punto 3

function Producto(){

    //DECLARACION DE OBJETOS
    const producto1 = {
        descripcion: "celular",
        precio: 250,
    }
    const producto2 = {
        descripcion: "laptop",
        precio: 600,
    }
    const producto3 = {
        descripcion: "tablet",
        precio: 180,
    }
    const producto4= {
        descripcion: "mouse",
        precio: 40,
    }
    const producto5 = {
        descripcion: "monitor",
        precio: 150,
    }

    //OBJETOS DENTRO DEL ARRAY
    const productos = [ producto1, producto2, producto3, producto4, producto5];
    
    mostrar_objetos(productos); //ejercicio 1

    const productosFiltrados = productos.filter(p => p.precio > 20);

    agregarIVA(productos);

}

export default Producto;    // exporto el componente producto