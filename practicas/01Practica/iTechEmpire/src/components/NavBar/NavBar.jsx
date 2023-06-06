import CartWidget from "../CartWidget/CardWidget";

const NavBar = () => {
    return(
        <>
        <div>
           <h1>Ecommerce</h1>
        </div>
       <nav class="orange darken-2">
          <div class="nav-wrapper">
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