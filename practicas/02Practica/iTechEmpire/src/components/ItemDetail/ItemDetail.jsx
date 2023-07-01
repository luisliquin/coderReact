import React from 'react'

const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div>
        <h3>Nombre: {nombre} </h3>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>{descripcion}</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail