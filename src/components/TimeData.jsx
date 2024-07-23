import "../styles/components/TimeData.css";

import { useEffect, useState } from "react";
import { destructureDate } from "../utilities/time_data";

export function TimeData() {
  const [time, setTime] = useState(destructureDate(new Date()));

  useEffect(() => {
    let timerID = setInterval(() => setTime(destructureDate(new Date())));

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="time-data">
      <h2 className="title">Date & Time</h2>
      <div className="sections">
        <div className="section">
          <h3 className="section-title">Date</h3>
          <p className="date">
            {time.day} - {time.month} - {time.year}
          </p>
        </div>
        <div className="section">
          <h3 className="section-title">Time</h3>
          <p className="time">
            {time.hour}:{time.minutes}:{time.seconds}
          </p>
        </div>
      </div>
    </div>
  );
}
