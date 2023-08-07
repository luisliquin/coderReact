import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar'
import { Link, NavLink } from "react-router-dom";

const initMaterialize = () => {
  M.AutoInit();
};

const NavBar = () => {
  useEffect(() => {
    initMaterialize();
  }, []);
    
    return(
      <> 
        <nav className="nav-wrapper">
          <Link to="/" className="brand-logo">iTechEmpire</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><NavLink to="/categoria/1">Celulares</NavLink></li>
            <li><NavLink to="/categoria/2">Tablets</NavLink></li>
            <li><NavLink to="/categoria/3">Notebooks</NavLink></li>
            <li><CartWidget/></li>
          </ul>
       </nav>       
       <ul className="sidenav" id="mobile-demo">
          <li><NavLink to="/categoria/1">Celulares</NavLink></li>
          <li><NavLink to="/categoria/2">Tablets</NavLink></li>
          <li><NavLink to="/categoria/3">Notebooks</NavLink></li>
          <li><CartWidget/>Carrito de compra</li>
        </ul>
      </>
    )
}

export default NavBar;