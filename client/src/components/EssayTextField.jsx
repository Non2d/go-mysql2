import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function EssayTextField() {
    const [text, setText] = useState("");
    const [rows, setRows] = useState(4);

    const handleChange = (event) => {
        const newLines = event.target.value.split('\n').length;
        setText(event.target.value);
        setRows(newLines);
    };

    //改行を消す
    const removeNewLines = () => {
        const newText = text.replace(/\n/g, "");
        setText(newText);
    };

    return (
        <Grid container>
            <Grid item xs={6}>
                <TextField
                    label="Debatabase"
                    multiline
                    rows={rows}
                    placeholder="Segment argumentation"
                    variant="outlined"
                    fullWidth
                    value={text}
                    onChange={handleChange}
                    style={{ fontSize: 16, textAlign:"justify" }} // Adjust this value as needed
                />
                <Button onClick={removeNewLines}>Remove New Lines</Button>
            </Grid>
            <Grid item xs={6}>
                <pre style={{ textAlign: "left", fontSize: 16 }}>{text}</pre>
            </Grid>
        </Grid>
    );
}

export default EssayTextField;