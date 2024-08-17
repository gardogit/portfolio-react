import React from 'react';
import Prod from './Prod';

export default function ListProd({ products }) {
  return (
    <>
      <div>Lista de Productos</div>
      <div className='lista'>
        { 
          products.map((prod) => (
            <Prod key={prod.id} prod={prod} />
          )) 
        }
      </div>
    </>
  );
}

