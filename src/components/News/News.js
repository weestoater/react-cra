import React, { useState, useEffect } from "react";
import getApi from "../../api/commonApi";
import Spinner from "../../misc/Spinner";
import NewsItem from "../../misc/NewsItem";

export default function News() {
  const [news, setNews] = useState(null);
  const apiUrl =
    "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=603ec9edb08b4f4b8c0b535665aea2b0";

  useEffect(() => {
    getApi(apiUrl).then(setNews);
  }, []);

  return (
    <>
      {news ? (
        news.articles.map((item, i) => <NewsItem key={i} item={item} />)
      ) : (
        <Spinner />
      )}
    </>
  );
}
