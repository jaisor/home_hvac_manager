import React, { useState, useEffect } from "react";

export default function OutdoorTemperature() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=92807,us&units=imperial&appid=${process.env.OPENWEATHERMAP_API_KEY}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
    }).then((response) => response.json())
      .then((data) => {
        setWeather(data.main);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <b>Weather</b>
        
      </div>
      <div>Yard Sensor</div>
    </div>
  )
}
