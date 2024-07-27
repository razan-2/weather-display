import "../styles/components/Forecast.css";

export function Forecast({ data }) {
  return (
    <div className={`forecast`}>
      <h1 className="title">Day's Forecast</h1>
      <div className="forecast-list">
        {data?.map((hour) => (
          <div className="day">
            <img src={hour.weatherCode?.image} alt="norisori" />
            <h3>{hour.temperature}°C</h3>
            <p>{hour.time.hour}:00</p>
          </div>
        ))}
      </div>
    </div>
  );
}
