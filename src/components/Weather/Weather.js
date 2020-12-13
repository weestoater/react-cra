import React, { useState, useEffect } from "react";
import getApi from "../../api/commonApi";
import Spinner from "../../misc/Spinner";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const apiUrl =
    "https://openweathermap.org/data/2.5/weather?id=2636932&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02";

  useEffect(() => {
    getApi(apiUrl).then(setWeather);
  }, []);

  return <Spinner />;
}
