import React from 'react';
import "./App.css";
import Tareas from './assets/components/tareas';
import { useState } from 'react'; 
import Producto from './assets/components/Producto'   //Importo el componente producto

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="ambos">
      <div className="tareas">
        <Tareas />
      </div>
      <div className="productos">
        <Producto />
        <h1>Productos</h1>
      </div>
    </div>
  );
};

export default App;

