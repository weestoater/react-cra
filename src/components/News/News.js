import React, { useState, useEffect } from "react";
import getApi from "../../api/commonApi";
import Spinner from "../../misc/Spinner";
import NewsItem from "../../misc/NewsItem";

export default function News() {
  const [news, setNews] = useState(null);
  const apiUrl =
    "http://newsapi.org/v2/everything?q=techcrunch&apiKey=603ec9edb08b4f4b8c0b535665aea2b0";

  useEffect(() => {
    getApi(apiUrl).then(setNews);
  }, []);

  return (
    <>
      <div className="col-sm-12">
        <h2>
          News:{" "}
          <small>
            <code>techcrunch</code>
          </small>
        </h2>
      </div>

      {news ? (
        news.articles.map((item, i) => <NewsItem key={i} item={item} />)
      ) : (
        <Spinner />
      )}
    </>
  );
}
