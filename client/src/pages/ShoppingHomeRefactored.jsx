// ShoppingHome.jsx
import React from 'react';
import ProductList from '../components/database/ProductList';
import AddProduct from '../components/database/AddProduct';

const ShoppingHomeRefactored = () => {
  const API_URL = process.env.API_URL;

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <ProductList API_URL={API_URL} />
      </div>
      <div style={{marginBottom: '20px',marginLeft:'40px'}}>
        <AddProduct />
      </div>
    </div>
  );
};

export default ShoppingHomeRefactored;