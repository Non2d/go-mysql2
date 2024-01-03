import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const ShoppingHome = () => {
  // GENERAL
  const [pageSize, setPageSize] = useState(20); //ページネーションの選択肢を管理

  // GET
  const [products, setProducts] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'CreatedAt', headerName: 'Created At', width: 200 },
    { field: 'UpdatedAt', headerName: 'Updated At', width: 200 },
    { field: 'Name', headerName: 'Name', width: 130 },
    { field: 'Age', headerName: 'Age', width: 130 },
    { field: 'DeletedAt', headerName: 'Deleted At', width: 200 },
  ];

  const fetchData = async () => {
    const result = await axios(
      'http://localhost:8080/users',
    );

    const dataWithIds = result.data.map((item) => ({
      ...item,
      id: item.ID,
      CreatedAt: new Date(item.CreatedAt).toLocaleString(),
      UpdatedAt: new Date(item.UpdatedAt).toLocaleString(),
    }));

    setProducts(dataWithIds);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // POST
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const postData = async (name, age) => {
    const result = await axios.post(
      'http://localhost:8080/users',
      {
        name: name,
        age: age,
      },
    );

    fetchData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData(name, age);
  };

  // DELETE
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <div style={{ height: 800, width: '80%', margin: '0 auto' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 50, 100]}
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          setSelectedRows(newSelection);
        }}
      />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          padding: 2,
          bgcolor: 'background.paper',
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-name"
              name="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-age"
              name="age"
              label="Age"
              value={age}
              onChange={(e) => {
                const value = e.target.value.trim();
                setAge(value === '' ? '' : isNaN(parseInt(value)) ? value : parseInt(value));
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" type="submit" fullWidth>
              Post
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              onClick={async () => {
                try {
                  const promises = selectedRows.map((id) =>
                    axios.delete(`http://localhost:8080/users/${id}`)
                  );
                  await Promise.all(promises);
                  const newProducts = products.filter((product) => !selectedRows.includes(product.id));
                  setProducts(newProducts);
                } catch (error) {
                  console.log(selectedRows);
                  console.error('削除できませんでした:', error);
                }
              }}
              fullWidth
            >
              Delete Selected
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ShoppingHome;