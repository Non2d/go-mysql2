// ProductList.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import UseFetchProducts from './UseFetchProducts';

const ProductList = ({ API_URL }) => {
  const products = UseFetchProducts(API_URL);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'CreatedAt', headerName: 'Created At', width: 200 },
    { field: 'UpdatedAt', headerName: 'Updated At', width: 200 },
    { field: 'Name', headerName: 'Name', width: 130 },
    { field: 'Age', headerName: 'Age', width: 130 },
    { field: 'DeletedAt', headerName: 'Deleted At', width: 200 },
  ];

  return (
    <div style={{ height: 800, width: '80%', margin: '0 auto' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;