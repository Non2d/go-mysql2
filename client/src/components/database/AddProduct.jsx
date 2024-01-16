// AddProduct.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

const AddProduct = (API_URL) => {
    // ここに商品を追加するロジック
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
            <Button onClick={() => handleSubmit(name, age)}>
                Post
            </Button>
        </Grid>
    );
};

export default AddProduct;