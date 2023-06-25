import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar";

const NavBar = () => {
  useEffect(() => {
    M.AutoInit(); // Inicializa los componentes de Materialize
  }, []);
  
    return(
      <header>        
        <nav className="nav-wrapper">
        <a href="#" className="brand-logo">iTechEmpire</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><a href="#">Celulares</a></li>
            <li><a href="#">Tablets</a></li>
            <li><a href="#">Notebooks</a></li>
            <li><CartWidget/></li>
          </ul>
       </nav>
       </header>
    )
}

export default NavBar;