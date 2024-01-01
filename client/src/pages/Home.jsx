import React from 'react';
import ToWeatherHomeButton from '../components/ToWeatherHomeButton';
import PlaceSearch from '../components/PlaceSearch';
import EssayTextField from '../components/EssayTextField';

const Home = () => {
  return (
    <div align="center">
      <h1>ホーム画面</h1>
      {/* <PlaceSearch /> */}
      {/* <EssayTextField /> */}
      <ToWeatherHomeButton />
      
    </div>
  );
}

export default Home;