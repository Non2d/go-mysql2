import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const ShoppingHome = () => {
  const API_URL = process.env.API_URL;
  console.log("APIのURLは"+API_URL);

  // GET
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(20); //ページネーションの選択肢を管理

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
      `${API_URL}/users`,
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
  const [errorMessage, setErrorMessage] = useState('');

  const postData = async (name, age) => {
    const result = await axios.post(
      `${API_URL}/users`,
      {
        name: name,
        age: age,
      },
    );

    fetchData();
  };

  const handleSubmit = (name, age) => {
    if (!name || !age) {
      setErrorMessage('Name and Age cannot be empty');
      return;
    } else {
      setErrorMessage('');
    }
    postData(name, age);
  };

  // DELETE
  const [selectedRows, setSelectedRows] = useState([]);
  const handleDelete = async () => {
    try {
      const promises = selectedRows.map((id) =>
        axios.delete(`${API_URL}/users/${id}`)
      );
      await Promise.all(promises);
      const newProducts = products.filter((product) => !selectedRows.includes(product.id));
      setProducts(newProducts);
    } catch (error) {
      console.error('削除できませんでした:', error);
    }
  };

  //UPDATE
  const handleEdit = async (name, age) => {
    try {
      const promises = selectedRows.map(async (id) => {
        await axios.put(`${API_URL}/users/${id}`, {
          name: name,
          age: age,
        });
      });
      await Promise.all(promises);
      fetchData();
    } catch (error) {
      console.error('更新できませんでした:', error);
    }
  };


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
      <span style={{ color: 'red' }}>{errorMessage}</span>
      <Box
        component="form"
        id="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          padding: 2,
          bgcolor: 'background.paper',
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid>
            <TextField
              id="outlined-name"
              name="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-age"
              name="age"
              type="number"
              label="Age"
              value={age}
              onChange={(e) => {
                const value = e.target.value.trim();
                setAge(value === '' ? value : parseInt(value));
              }}
            />
          </Grid>
          <Grid>
            <ButtonGroup variant="outlined" aria-label="contained primary button group">
              <Button onClick={() => handleSubmit(name, age)}>
                Post
              </Button>
              <Button onClick={() => handleEdit(name, age)}>
                Edit
              </Button>
              <Button onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ShoppingHome;