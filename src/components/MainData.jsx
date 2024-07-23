import "../styles/components/MainData.css";

export function MainData({ temperature, apparent_temperature }) {
  return (
    <div className="main-data">
      <h1 className="title">Temperature Data</h1>
      <div className="data">
        <h2 className="temperature">Temperature: {temperature}°C</h2>
        <h3 className="apparent_temperature">
          Apparent Temperature: {apparent_temperature}°C
        </h3>
      </div>
    </div>
  );
}
