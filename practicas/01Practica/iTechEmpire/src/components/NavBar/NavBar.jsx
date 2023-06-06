import CartWidget from "../CartWidget/CardWidget";

const NavBar = () => {
    return(
        <>
       <nav>
          <h1>Ecommerce</h1>
          <div>
          <button>Celulares</button>
          <button>Tablets</button>
          <button>Notebooks</button>
          </div>
       </nav>
       <CartWidget/>
       </>
    )
}

export default NavBar;