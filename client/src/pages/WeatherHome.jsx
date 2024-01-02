import React from 'react';
import PlaceSearch from '../components/PlaceSearch';
import ToHomeButton from '../components/ToHomeButton';

const WeatherHome = () => {
  return (
    <div align="center">
      <h1>天気予報アプリケーションのホーム</h1>
      <PlaceSearch />
    </div>
  );
}

export default WeatherHome;