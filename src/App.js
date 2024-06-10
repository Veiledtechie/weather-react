import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState(" ");
  const [message, setMessage] = useState(" ");

  function showTemperature(response) {
    setMessage(
      `It is currently ${Math.round(response.data.main.temp)}℃ in ${city}`
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64469ac67e6dc941feb5b50915a18dc7&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateChange(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <h1 className="mt-5">Weather Search Engine</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="mt-3"
          type="text"
          placeholder="Enter a city"
          onChange={updateChange}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
