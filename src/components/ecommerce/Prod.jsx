import React from 'react'
import './css/Product.css'

export default function Prod( {prod} ) {
  return (
    <div className='product'>
      <img src={prod.image} alt={prod.name} />
      <h4>{prod.name}</h4>
      <p>Precio:{prod.price}</p>
      <p>Categoría:{prod.category}</p>
    </div>
  )
}
