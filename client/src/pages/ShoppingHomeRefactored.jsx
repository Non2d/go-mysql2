// ShoppingHome.jsx
import React from 'react';
import ProductList from '../components/database/ProductList';
import AddProduct from '../components/database/AddProduct';
import EditProduct from '../components/database/EditProduct';

const ShoppingHomeRefactored = () => {
  const API_URL = process.env.API_URL;
  const [selectedRows, setSelectedRows] = React.useState([]);
  
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <ProductList API_URL={API_URL} selectedRows={selectedRows}/>
      </div>
      <div style={{marginBottom: '20px',marginLeft:'40px'}}>
        <AddProduct />
      </div>
      <div style={{marginBottom: '20px',marginLeft:'40px'}}>
        <EditProduct API_URL={API_URL} selectedRows={selectedRows}/>
      </div>
    </div>
  );
};

export default ShoppingHomeRefactored;