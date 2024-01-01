import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Places from '../data/place.json';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const PlaceSearch = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');


  const changeId = (event) => {
    setId(event.target.value);
  }

  const onSubmit = () => {
    if (id) {
        navigate(`/weather/${id}`);
    } else {
        alert('地域を選択してください');
    }
  }

  return (
    <>
      <FormControl sx={{ width: '80%' }}>
        <InputLabel id="demo-simple-select-label">Place</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={id}
          label="Place"
          onChange={changeId}
        >
          {
            Places.data.map((place, i) => {
              return(
                <MenuItem key={i} value={place.id}>{place.name}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="contained" disableElevation onClick={onSubmit}>
          検索
        </Button>
      </Box>
    </>
  )
}

export default PlaceSearch;