import "../styles/components/ForecastItem.css";

export function ForecastItem({ item }) {
  return (
    <div className="forecast-item">
      <img
        src={item.weatherCode.image}
        alt={item.weatherCode.description}
        className="forecast-icon"
      />
      <h1 className="title">{item.temperature}°C</h1>
      <p>
        {item.time.hour}:{item.time.minutes}
      </p>
    </div>
  );
}
