import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

//Primer paso: IMPORTEMOS

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';



const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext:
    const {agregarProducto} = useContext(CarritoContext);
  //
  

  const manejadorCantidad = (cantidad)  => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
    console.log(cantidad)
  }

  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam dolore natus ipsa molestiae facere assumenda. Voluptas omnis magni saepe, consequatur atque dolorem eius ipsum est quis porro neque quibusdam!</p>
        <img src={img} alt={nombre} />
        {
          //Acá empleamos la lógica del montaje y desmontaje de componentes. 
        }

        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail