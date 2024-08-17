// src/components/Products.jsx
import Header from '../Header';
import DetailsConteiner from './DetailsConteiner';
import { requestData } from './helper'
import ListProd from './ListProd'
import { useEffect, useState } from 'react';

function Products () {
  
  const description = 'Lorem ipsum...';

  const [products, setProducts] = useState([]);
  useEffect(() => {
    requestData()
      .then((res) => {
        setProducts(res)
      })
  }, [])

  return (
    <div className='main-conteiner'>
      <Header name='E-commerce' backTo='Volver al inicio' desc={description} />
      <div className='conteiner-end'>
        <div className=''>
          <h2>Demo simple:</h2>
          <DetailsConteiner id={2} />
          <ListProd products= {products}/>
          
        </div>
      </div>
    </div>
  );
}

export default Products;