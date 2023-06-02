import './App.css'
//JSX = es una extensión de JS. 

const App = () => {
  //Acá vamos a escribir la parte lógica. 

  //En el return vamos a retornar la interfaz del usuario. 
  return (
    <>
        <h1 className="titulo">Hola Comisión</h1>
        <h2>Esto es un h2</h2>
        <img src="https://placekitten.com/200/300" alt="gatito" />
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti quo mollitia deleniti aperiam ullam beatae odit eos, placeat ex fuga ut repellendus tenetur, porro, adipisci commodi ducimus temporibus. Recusandae?</p>
    </>

    
  )
}

export default App

//Cada componente debe retornar un elemento. 