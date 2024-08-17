//src/components/ecommerce/Details.jsx
import React from 'react';
import './css/Details.css';

function Details({ item }) {
  return (
    <div className="details-container">
      <img src='https://dummyimage.com/200x250.png/dddddd/000000' alt={item.name} />
      <div>
        <h3 className="name">{item.name}</h3>
        <p className="description">{item.description}</p>
        <p className="category">Marca: {item.category}</p>
        <p className="year">Año de lanzamiento: {item.year}</p>
        <p className="price">{item.price !== 'n/a' ? item.price : 'Agotado'}</p>
      </div>
    </div>
  );
}

export default Details;