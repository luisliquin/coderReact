import logo from "../../assets/images/logo.svg"
import './CartWidget.css'

const CartWidget = () => {
    return(
        <>
            <img className='imgCarrito' src={logo} alt="cart-widget" />
        </>
    )
}

export default CartWidget;