import {WeatherActionTypes} from "./weatherActionTypes";

export interface WeatherData {
  weather: WeatherResponse|null,
  success: boolean,
  error: string|null
}
export interface WeatherState {
  weatherData: WeatherData,
  searchHistory:Array<{city:string,country:string, date: Date}>
}

export interface RequestWeatherAction {
  type: typeof WeatherActionTypes.WEATHER_REQUEST,
  payload: {city: string, country: string}
}

export interface ResponseWeatherSuccessAction {
  type: typeof WeatherActionTypes.WEATHER_RESPONSE_SUCCESS,
  payload: {data: WeatherResponse}
}

export interface ResponseWeatherFailureAction {
  type: typeof WeatherActionTypes.WEATHER_RESPONSE_FAILURE,
  payload: {error: string}
}

export type WeatherActions =
  RequestWeatherAction |
  ResponseWeatherFailureAction |
  ResponseWeatherSuccessAction;



export interface WeatherResponse {
  "coord": {
    "lon": number,
    "lat": number
  },
  "weather": [
    {
      "id": number,
      "main": string,
      "description": string,
      "icon": string
    }
  ],
  "base": string,
  "main": {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number
  },
  "visibility": number,
  "wind": {
    "speed": number,
    "deg": number,
    "gust": number
  },
  "clouds": {
    "all": number
  },
  "dt": number,
  "sys": {
    "type": number,
    "id": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number
}
