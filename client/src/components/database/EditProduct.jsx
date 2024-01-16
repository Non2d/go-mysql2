// AddProduct.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import axios from 'axios';

const EditProduct = ({API_URL,selectedRows}) => {
    // ここに商品を更新するロジック
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        const result = await axios(`${API_URL}/users`);

        const dataWithIds = result.data.map((item) => ({
            ...item,
            id: item.ID,
            CreatedAt: new Date(item.CreatedAt).toLocaleString(),
            UpdatedAt: new Date(item.UpdatedAt).toLocaleString(),
        }));

        setProducts(dataWithIds);
    };

    //UPDATE
    const handleEdit = async (name, age) => {
        try {
            const promises = selectedRows.map(async (id) => {
                console.log(selectedRows);
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
            <Button onClick={() => handleEdit(name, age)}>
                Edit selected
            </Button>
        </Grid>
    );
};

export default EditProduct;