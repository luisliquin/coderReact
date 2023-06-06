import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItenListContainer from './components/ItemListContainer/ItemListContainer'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>   
      <ItenListContainer greeting ={"Bienvenidos"}/>
    </>
  )
}

export default App;