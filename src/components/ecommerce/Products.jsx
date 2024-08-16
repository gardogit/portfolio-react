// src/components/Products.jsx
import Header from '../Header';

function Products () {

  const description = 'Lorem ipsum...';
  return (
    <div className='main-conteiner'>
      <Header name='E-commerce' backTo='Volver al inicio' desc={description} />
      <div className='conteiner-mid'>
        <div className=''>
          <h2>Demo simple:</h2>
        </div>
      </div>
    </div>
  );
}

export default Products;