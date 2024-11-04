import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import WeatherApp from "./WeatherApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="WeatherApp">
    <h1>Weather App</h1>
    <WeatherApp />
  </div>
);
