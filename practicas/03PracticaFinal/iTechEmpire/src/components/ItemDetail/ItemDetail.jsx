import React, {useState, useContext} from 'react'
import ItemCount from '../itemCount/itemCount'
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({id, nombre, precio, img, descripcion, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad)  => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='container'>
      <div className='column'>
      <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>{descripcion}</p>
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }
      </div>
      <div className='column'>
        <img className='materialboxed' src={img} alt={nombre} />
      </div>      
    </div>
  )
}


export default ItemDetail