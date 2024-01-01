import React from 'react';
import PlaceSearch from '../components/PlaceSearch';
import EssayTextField from '../components/EssayTextField';

const Home = () => {
  return (
    <div align="center">
      <h1>天気予報アプリケーション</h1>
      <PlaceSearch />
      <br />
      <EssayTextField />
    </div>
  );
}

export default Home;