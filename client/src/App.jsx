import React, { useState} from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Card, WeatherHome, Weather, ShoppingHome, NotFound } from './pages/index';
import Header from "./components/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const handleThemeChange = (newMode) => {
        setDarkMode(newMode);
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <div className="App">
                <BrowserRouter>
                    <Header onThemeChange={handleThemeChange} title="Web Learing" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/card" element={<Card />} />
                        <Route path="/weather_home" element={<WeatherHome />} />
                        <Route path="/weather/" element={<Weather />} />
                        <Route path="/weather/:id" element={<Weather />} />
                        <Route path="/shopping_home" element={<ShoppingHome />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);