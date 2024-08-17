//src/components/ecommerce/DetailsConteiner.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { requestId } from './helper';
import Details from './Details';
import Header from '../Header';

function DetailsConteiner() {

  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const description = 'La demo en React muestra un sistema de productos para un e-commerce, donde los usuarios pueden acceder fácilmente a los detalles de los productos. En la parte superior, se encuentra un filtro por marcas de los productos, mientras que debajo se despliega la lista de los productos disponibles. Al ingresar a los detalles de un producto podemos navegar a través de un breadcrumb que indica la ruta, proporcionando contexto sobre la categoría y el nombre del producto seleccionado. Además de visualizar las características del producto seleccionado.';

  useEffect(() => {
    requestId(id)
      .then((res) => {
        setItem(res);
        setError(null);
      })
      .catch((err) => {
        setError(err.error);
      });
  }, [id]);

  return (
    <div className='main-conteiner'>
      <Header name='E-commerce' backTo='Volver al inicio' desc={description} />
      <div className='conteiner-end'>
        <div className='navigate-details'>
          <button onClick={() => navigate('/ecommerce')} className='button'>Ver todos los productos</button>
          <nav className='breadcrumbs'>
            <span onClick={() => navigate('/ecommerce')}>Todos los productos</span> &gt;
            {item && (
              <>
                <span onClick={() => navigate(`/ecommerce/category/${item.category}`)}> 
                  {item.category}
                </span> 
                &gt;
                <span> {item.name} </span>
              </>
            )}
        </nav>
        </div>
      
        <h2>Detalles del Producto:</h2>
        {error ? (
          <p>{error}</p>
        ) : (
          item && <Details item={item} />
        )}
      </div>
    </div>
  )
}

export default DetailsConteiner