import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItenListContainer from './components/ItemListContainer/ItemListContainer'
import 'materialize-css/dist/css/materialize.min.css'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <> 
      <NavBar/>   
      <ItenListContainer greeting ={"Bienvenidos"}/>
      <Footer/>
    </>
  )
}

export default App;