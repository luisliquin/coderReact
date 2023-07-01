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
          <Link to="/" className="brand-logo">iTechEmpire</Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><NavLink to="/categoria/1">Celulares</NavLink></li>
            <li><NavLink to="/categoria/2">Tablets</NavLink></li>
            <li><NavLink to="/categoria/3">Notebooks</NavLink></li>
            <li><CartWidget/></li>
          </ul>
       </nav>
       </header>
    )
}

export default NavBar;