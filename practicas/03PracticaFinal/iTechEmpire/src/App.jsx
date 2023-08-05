import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { CarritoProvider } from "./context/CarritoContext"

const App = () => {
  return (
    <> 
      { 
       <Router>
        <CarritoProvider>
          <NavBar/>   
            <Routes>
              <Route path="/" element={ <ItemListContainer/> } />
              <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
              <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<Cart/>}  />
              <Route path="/checkout" element={<Checkout/>}  />
              <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
            </Routes>
            <Footer/>
         </CarritoProvider>
       </Router>  
      }
    </>
  )
}

export default App;