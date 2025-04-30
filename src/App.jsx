import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Producto from './assets/components/Producto'   //Importo el componente producto

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Producto/>    {/* Se renderiza Producto*/}
    </>
  )
}

export default App
