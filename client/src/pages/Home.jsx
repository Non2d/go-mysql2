import React from 'react';
import ToPageButton from '../components/ToPageButton';

const Home = () => {
  return (
    <div align="center">
      <h1>ホーム画面</h1>
      {/* <PlaceSearch /> */}
      {/* <EssayTextField /> */}
      <ToPageButton link="/weather_home" label="天気予報へ" />
      <ToPageButton link="/card" label="カードへ"/>
      <ToPageButton link="/shopping_home" label="買い物リストへ"/>
      {/* <ToPageButton link="/shopping_home_refactored" label="改良版買い物リストへ"/> */}
    </div>
  );
}

export default Home;