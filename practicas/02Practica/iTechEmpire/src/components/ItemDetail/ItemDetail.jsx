import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div className='container'>
      <div className='column'>
      <h3>Nombre: {nombre} </h3>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>{descripcion}</p>
      </div>
      <div className='column'>
        <img className='materialboxed' src={img} alt={nombre} />
      </div>      
    </div>
  )
}


export default ItemDetail