import "../styles/components/WeatherIcon.css";
import { getWeatherCodeData } from "../utilities/weather_codes";

export function WeatherIcon({ code, isNight = false, alt = false }) {
  return (
    <div className={`weather-icon-container ${alt && "alt-background"}`}>
      <img src={code.image} alt="" className="weather-icon" />
      <h3 className="weather-icon-description">{code.description}</h3>
    </div>
  );
}
