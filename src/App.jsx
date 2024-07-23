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
  const [weather, setWeather] = useState();

  useEffect(() => {
    let timerID = setInterval(() => {
      const date = destructureDate(new Date());

      if (date.minutes % 30 === 0 && parseInt(date.seconds, 10) === 0) {
        console.log("hey");
        fetchData()
          .then((res) => {
            setWeather(res);
          })
          .catch((error) => console.error(error));
      }
    });
    fetchData()
      .then((res) => {
        setWeather(res);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!weather) return;

  return (
    <div className="app">
      <div className="featured-data">
        <FeaturedData city={"Sinaia"} />
      </div>

      <div className="temperature-display">
        <WeatherIcon code={weather.weatherCode} isNight={weather.isNight} />
      </div>
      <div className="main-data">
        <MainData
          temperature={weather.temperature}
          apparent_temperature={weather.apparentTemperature}
        />
      </div>
      <div className="time-data">
        <TimeData />
      </div>
      <div className="forecast">
        <Forecast forecast={weather.hourly_data} />
      </div>
    </div>
  );
}

export default App;
