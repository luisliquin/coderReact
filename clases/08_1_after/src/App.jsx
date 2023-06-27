/** STORAGE **/
//Nos permite guardar datos de manera local en el navegador. 
//El navegador nos ofrece dos maneras de guardar datos: 
//localStorge: 
//sessionStorage. 

//LocalStorage: almacena datos de forma indefinida, hasta que el usuario los borra de forma manual.

import TodoList from "./componentes/TodoList/TodoList";

const App = () => {

  // localStorage.setItem("curso", "react");
  // localStorage.setItem("numerito", 1234);
  // localStorage.setItem("booleano", true);

  // let recuperoNumerito = localStorage.getItem("numerito");
  // console.log(recuperoNumerito, typeof recuperoNumerito);

  // //JSON = "string" con formato especial. 

  // const samuel = {
  //   nombre: "Samuel",
  //   edad: 18
  // };

  // //1) Pasamos el objeto a JSON: 
  // const samuelJSON = JSON.stringify(samuel);

  // //2) Lo guardo en el localStorage.
  // localStorage.setItem("samuel", samuelJSON);

  // //SI LO QUIERO RECUPERAR, HAGO EL CAMINO CONTRARIO: 
  
  // //1) Recupero el JSON del localStorage: 
  // const personaJSON = localStorage.getItem("samuel");

  // //2) Paso el JSON a objeto nuevamente: 
  // const objetoNuevoSamuel = JSON.parse(personaJSON);
  // console.log(objetoNuevoSamuel);



  return (
    <div>
      <TodoList/>
    </div>
  )
}

export default App