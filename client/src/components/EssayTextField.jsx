import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function EssayTextField() {
    const [text, setText] = useState("");
    const [rows, setRows] = useState(4);

    const handleChange = (event) => {
        const newLines = event.target.value.split('\n').length;
        setText(event.target.value);
        setRows(newLines);
    };

    return (
        <Grid container>
            <Grid item xs={6}>
                <TextField
                    label="Debatabase"
                    multiline
                    rows={rows}
                    rowsMax={10} // Adjust this value as needed
                    placeholder="Segment argumentation"
                    variant="outlined"
                    fullWidth
                    value={text}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={6}>
                <pre>{text}</pre>
            </Grid>
        </Grid>
    );
}

export default EssayTextField;