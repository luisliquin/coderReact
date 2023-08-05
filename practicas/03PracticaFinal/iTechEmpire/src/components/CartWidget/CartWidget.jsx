import logo from "../../assets/images/logo.svg"
import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    return(
        <>
            <Link to="/cart">  
            <img className='imgCarrito' src={logo} alt="cart-widget" />
            {
                cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }
            </Link>
        </>

    )
}

export default CartWidget;