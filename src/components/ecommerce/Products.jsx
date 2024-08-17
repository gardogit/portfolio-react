// src/components/ecommerce/Products.jsx
import Header from '../Header';
import { requestData } from './helper'
import ListProd from './ListProd'
import { useEffect, useState } from 'react';

function Products () {
  
  const description = 'La demo en React muestra un sistema de productos para un e-commerce, donde los usuarios pueden acceder fácilmente a los detalles de los productos. En la parte superior, se encuentra un filtro por marcas de los productos, mientras que debajo se despliega la lista de los productos disponibles. Al ingresar a los detalles de un producto podemos navegar a través de un breadcrumb que indica la ruta, proporcionando contexto sobre la categoría y el nombre del producto seleccionado. Además de visualizar las características del producto seleccionado.';
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    requestData()
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      })
  }, []);

  const handleFilterByBrand = (category) => {
    if (category === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(prod => prod.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleShowAllProducts = () => {
    setFilteredProducts(products);
  };

  return (
    <div className='main-conteiner'>
      <Header name='E-commerce' backTo='Volver al inicio' desc={description} />
      <div className='conteiner-end'>
        <h2>Demo simple de productos:</h2>
        <div className='list-prod'>
        <ListProd 
            products={filteredProducts} 
            onFilterByBrand={handleFilterByBrand} 
            onShowAllProducts={handleShowAllProducts} 
          />
        </div>
      </div>
    </div>
  );
}

export default Products;