import mostrar_objetos from "./funcion1_EJ_AD"  //importa la funcion para mostrar los objetos

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
}

export default Producto;    // exporto el componente producto