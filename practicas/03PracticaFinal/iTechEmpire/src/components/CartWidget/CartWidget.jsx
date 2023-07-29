import logo from "../../assets/images/logo.svg"
import './CartWidget.css'

const CartWidget = () => {
    return(
        <>
            <img className='imgCarrito' src={logo} alt="cart-widget" />
            <strong>10</strong>
        </>
    )
}

export default CartWidget;