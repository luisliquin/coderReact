import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Productos from './components/Productos/Productos'
import Formulario from './components/Formulario/Formulario'

function App() {
  return (
    <> 
      {/* <Productos/>
      <Formulario/>*/}
      { 
       <Router>
       <NavBar/>   
         <Routes>
           <Route path="/" element={ <ItemListContainer/> } />
           <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
           <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
           <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
         </Routes>
         <Footer/>
       </Router>  
      }
    </>
  )
}

export default App;