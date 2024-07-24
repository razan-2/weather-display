import { WeatherIcon } from "./components/WeatherIcon";
import { FeaturedData } from "./components/FeaturedData";
import { MainData } from "./components/MainData";

import "./App.css";
import { TimeData } from "./components/TimeData";
import { fetchData } from "./utilities/fetchData";

import { useState, useEffect } from "react";
import { Forecast } from "./components/Forecast";
import { destructureDate } from "./utilities/time_data";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    let timerID = setInterval(() => {
      const date = destructureDate(new Date());

      if (data !== undefined) setData({ ...data, time: date });

      if (date.minutes % 30 === 0 && parseInt(date.seconds, 10) === 0) {
        fetchData()
          .then((res) => {
            setData(res);
          })
          .catch((error) => console.error(error));
      }
    });
    fetchData()
      .then((res) => {
        setData({ ...res, time: destructureDate(new Date()) });
      })
      .catch((error) => console.error(error));

    return () => clearInterval(timerID);
  }, []);

  if (!data) return;

  return (
    <div className="app">
      <div className="featured-data">
        <FeaturedData />
      </div>

      <div className="temperature-display">
        <WeatherIcon />
      </div>
      <div className="main-data">
        <MainData />
      </div>
      <div className="time-data">
        <TimeData />
      </div>
      <div className="forecast">
        <Forecast />
      </div>
    </div>
  );
}

export default App;
