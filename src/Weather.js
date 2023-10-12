import React, { Component } from "react";
import Day from "./Day";

export class Weather extends Component {
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    // console.log(this.time);

    return (
      <div>
        Weather {this.props.location}
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              date={date}
              max={max.at(i)}
              min={min.at(i)}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
            />
            // <li>{date}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
