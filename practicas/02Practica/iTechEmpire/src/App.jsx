import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItenListContainer from './components/ItemListContainer/ItemListContainer'
import 'materialize-css/dist/css/materialize.min.css'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <> 
      <NavBar/>   
      <ItenListContainer greeting ={"Bienvenidos"}/>
      <Router>
        <Routes>
          <Route path='/'/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App;