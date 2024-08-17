//src/components/ecommerce/Prod.jsx

import React from 'react'
import { useNavigate } from 'react-router-dom';
import './css/Product.css'

export default function Prod( {prod} ) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/ecommerce/${prod.id}`);
  };
  return (
    <div className='product'  onClick={handleDetailsClick}>
      <img src={prod.image} alt={prod.name} />
      <h4>{prod.name}</h4>
      <p>Precio:{prod.price}</p>
      <p>Categoría:{prod.category}</p>
      <button>Ver detalles</button>
    </div>
  )
}
