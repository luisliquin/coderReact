/*

COMPONENTES 1: 

Definición: conjunto de elementos que cumplen una función específica. 
(Ejemplo un botón, una card de un producto, un título, un formulario)

Ventajas de trabajar con Componentes: 

- Reutilizar código. 
- Favorece la separación de responsabilidades. 
- El código es más fácil de entender. 
- Mejora el rendimiento de la aplicación. 

Características principales: 

- Renderizan un único elemento. 
- Pueden recibir props (propiedades)
- Pueden tener un estado. 


¿Qué son las props? 
Las props son objetos que contienen datos que un componente necesita para renderizarse correctamente. Y estas se envían de forma unidireccional de componente padre a componente hijo. 

¿Qué es el estado? 
Es un objeto que contiene información del componente que puede cambiar durante la ejecución de la App. 

Para crear y manipular el estado tenemos que ayudarnos con funciones propias de la librería React, estas funciones se llaman "Hooks". 
*/
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a la tienda Marolio"} />
      
    </>

  )
}

export default App

/*
<TituloPrincipal titulo = {"Hola Comisión"} dia = {"martes"} />
<ItemCount/>


*/