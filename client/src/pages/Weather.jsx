import React from "react";
import { useParams } from "react-router-dom";

const Weather = () => {
  const params = useParams();

  const id = params.id; // urlにあるパラメータの中のidを取得
  //このconstというのは，次にレンダリングされるまで更新できないという意味で，
  //レンダリングが更新されればこの変数も更新できる．

  return (
    <>
      <h1>天気予報表示したいねー</h1>
      <h1>{id}</h1>
    </>
  );
}

export default Weather;