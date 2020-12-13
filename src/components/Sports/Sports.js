import React, { useState, useEffect } from "react";
import getApi from "../../api/commonApi";
import Spinner from "../../misc/Spinner";
import NewsItem from "../../misc/NewsItem";

export default function Sports() {
  const [sports, setSports] = useState(null);
  const apiUrl =
    "http://newsapi.org/v2/everything?q=sports&apiKey=603ec9edb08b4f4b8c0b535665aea2b0";

  useEffect(() => {
    getApi(apiUrl).then(setSports);
  }, []);

  return (
    <>
      {sports ? (
        sports.articles.map((item, i) => <NewsItem key={i} item={item} />)
      ) : (
        <Spinner />
      )}
    </>
  );
}
