import React from 'react';
import ToWeatherHomeButton from '../components/ToWeatherHomeButton';
import ToCardButton from '../components/ToCardButton';

const Home = () => {
  return (
    <div align="center">
      <h1>ホーム画面</h1>
      {/* <PlaceSearch /> */}
      {/* <EssayTextField /> */}
      <ToWeatherHomeButton />
      <ToCardButton />
      
    </div>
  );
}

export default Home;