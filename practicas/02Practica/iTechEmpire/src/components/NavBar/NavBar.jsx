import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  useEffect(() => {
    M.AutoInit();
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