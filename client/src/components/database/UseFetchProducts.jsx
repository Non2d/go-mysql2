// useFetchProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetchProducts = (API_URL) => {
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

    useEffect(() => {
        fetchData();
    }, []);

    return products;
};

export default UseFetchProducts;