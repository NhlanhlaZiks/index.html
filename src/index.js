import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import WeatherApp from "./WeatherApp";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="WeatherApp">
    <h1>Weather App</h1>
    <WeatherApp />
    <p>
      This project was coded by <a href="#"> Nhlanhla Zikalala</a> and is hosted
      on <a href="https://github.com/NhlanhlaZiks/index.html"> Github</a>
    </p>
  </div>
);
