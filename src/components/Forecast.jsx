import "../styles/components/Forecast.css";

export function Forecast() {
  return (
    <div className={`forecast`}>
      <h1 className="title">Day's Forecast</h1>
      <div className="forecast-list"></div>
    </div>
  );
}
