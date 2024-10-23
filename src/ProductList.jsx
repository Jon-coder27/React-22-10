import React from 'react';
import { products } from '../data/products';

const ProductList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '180px', textAlign: 'center' }}>
          <img src={product.image} alt={product.title} style={{ width: '100%' }} />
          <h3>{product.title}</h3>
          <p>R$ {product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
