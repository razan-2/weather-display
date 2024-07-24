import "../styles/components/WeatherIcon.css";

export function WeatherIcon() {
  return (
    <div className={`weather-icon-container`}>
      <img src="" alt="" className="weather-icon" />
      <h3 className="weather-icon-description"></h3>
    </div>
  );
}
