import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../../api/FetchProducts';
import Card from '../Card/Card';
import Loading from '../../Loading/Loading';
import AppContext from '../../../context/AppContext';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <Card key={product.id} data={product} />)}
      </section>
    )
    
  );
}

export default Products;