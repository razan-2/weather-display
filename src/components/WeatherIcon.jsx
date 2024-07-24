import "../styles/components/WeatherIcon.css";

export function WeatherIcon({ code, alt = false }) {
  return (
    <div className={`weather-icon-container ${alt && "alt-background"}`}>
      <img src={code.image} alt={code.description} className="weather-icon" />
      <h3 className="weather-icon-description">{code.description}</h3>
    </div>
  );
}
