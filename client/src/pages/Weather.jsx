import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import axios from "axios";
import WeatherDetail from "../components/WeatherDetail";
import ToWeatherHomeButton from "../components/ToWeatherHomeButton";

const Weather = () => {
  const params = useParams();

  const id = params.id;
  const [weather, setWeather] = useState();

  useEffect(() => {
    const getWeather = async () => {
      await axios.get(`https://weather.tsukumijima.net/api/forecast/city/${id}`)
        .then((res) => {
          setWeather(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getWeather();
  }, []);

  return (
    <>
      {weather&&weather.error? 
        <h1>{weather.error}</h1>:
        <>
          <h1 align="center">{weather? weather.title: null}</h1>
          <Box sx={{display: {md: 'flex'}, justifyContent: {md: 'space-between'}}}>
          {weather?
            weather.forecasts.map((forecast, i) => {
              return(
                <WeatherDetail 
                  date={forecast.date} 
                  forecasts={forecast.telop} 
                  image={forecast.image.url}
                  minTemp={forecast.temperature.min.celsius? forecast.temperature.min.celsius: '--'}
                  maxTemp={forecast.temperature.max.celsius? forecast.temperature.max.celsius: '--'}
                  key={i}
                />
              )
            }): null
          }
          </Box>

          {weather?
             <ToWeatherHomeButton />:null
           }
        </>
      }
    </>
  );
}

export default Weather;