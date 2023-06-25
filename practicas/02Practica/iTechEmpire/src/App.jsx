import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItenListContainer from './components/ItemListContainer/ItemListContainer'
import 'materialize-css/dist/css/materialize.min.css'
import Footer from './components/Footer/Footer'
import ItemCount from './components/itemCount/itemCount'

function App() {

  return (
    <> 
      <NavBar/>   
      <ItenListContainer greeting ={"Bienvenidos"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada:", quantity) }/>
      <Footer/>
    </>
  )
}

export default App;