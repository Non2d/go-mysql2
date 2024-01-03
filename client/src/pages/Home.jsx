import React from 'react';
import ToWeatherHomeButton from '../components/ToWeatherHomeButton';
import ToCardButton from '../components/ToCardButton';
import ToShoppingHomeButton from '../components/ToShoppingHomeButton';

const Home = () => {
  return (
    <div align="center">
      <h1>ホーム画面</h1>
      {/* <PlaceSearch /> */}
      {/* <EssayTextField /> */}
      <ToWeatherHomeButton />
      <ToCardButton />
      <ToShoppingHomeButton />
      
    </div>
  );
}

export default Home;