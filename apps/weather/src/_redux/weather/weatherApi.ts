import axios from "axios";
import {WeatherResponse} from "./weatherDeclaration";

const baseURL = "https://api.openweathermap.org/data/2.5/weather";

export function getTodayWeather(city: string, country: string) {
  const q = country == null
    ? city
    : [city, null, country].join(',');
  return axios.get<WeatherResponse>(`${baseURL}`, {
    params: {
      q,
      appid: process.env["NX_WeatherApiKey"]
    }
  })
}
