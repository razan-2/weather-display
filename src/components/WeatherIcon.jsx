import "../styles/components/WeatherIcon.css";

export function WeatherIcon({weather}) {
  // if(!weather.image) return;
  return (
    <div className={`weather-icon-container`}>
      <img src={weather?.image} alt="un icon cu un nor" className="weather-icon" />
      <h3 className="weather-icon-description">{weather?.description}</h3>
    </div>
  );
}
