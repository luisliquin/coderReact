import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <> 
      <NavBar/>   
      <ItemListContainer greeting ={"Bienvenidos"}/>
      <Router>
        <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App;