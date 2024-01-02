import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Card, WeatherHome, Weather, NotFound } from './pages/index';


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/weather_home" element={<WeatherHome />} />
                    <Route path="/weather/" element={<Weather />} />
                    <Route path="/weather/:id" element={<Weather />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);