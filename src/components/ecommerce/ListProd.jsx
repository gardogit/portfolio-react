//src/components/ecommerce/ListProd.jsx
import React from 'react';
import Prod from './Prod';

export default function ListProd({ products, onProductClick, onFilterByBrand, onShowAllProducts }) {

  const categories  = [...new Set(products.map(prod => prod.category))];

  return (
    <>
      <div className='filter-buttons'>
        <button onClick={onShowAllProducts}>
          Todas las Marcas
        </button>
        {categories.map(category => (
          <button key={category} onClick={() => onFilterByBrand(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className='list'>
        { 
          products.map((prod) => (
            <Prod key={prod.id} prod={prod} onProductClick={onProductClick} />
          )) 
        }
      </div>
    </>
  );
}

