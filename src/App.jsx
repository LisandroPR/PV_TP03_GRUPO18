import React from 'react';
import Tareas from './assets/components/tareas';

import Producto from './assets/components/Producto'   //Importo el componente producto

function App() {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Tareas />
    </div>
  );
  const [count, setCount] = useState(0)

  return (
    <>
      <Producto/>    {/* Se renderiza Producto*/}
    </>
  );
}

export default App;