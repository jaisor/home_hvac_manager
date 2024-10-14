import React from "react";

const handleOpenWeatherMapAPI = async () => {
  const url = "api.openweathermap.org/data/2.5/weather?zip=92807,us&units=imperial&APPID=09770a23e80a02f63266421574cbfc6d";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    }
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
}

export default function OutdoorTemperature() {
  return (
    <div class="grid">
      <div>
        <b>Weather</b>
        {handleOpenWeatherMapAPI()}
      </div>
      <div>Yard Sensor</div>
    </div>
  );
}
