import {WeatherActionTypes} from "./weatherActionTypes";
import {WeatherActions, WeatherResponse, WeatherState} from "./weatherDeclaration";

const initialState: WeatherState = {
  weatherData: {
    error: null,
    success: false,
    weather: null
  },
  searchHistory:[]
};

export const weatherReducer = (state = initialState, action: WeatherActions):WeatherState => {
  const {type} = action;
  switch (type){
    case WeatherActionTypes.WEATHER_RESPONSE_FAILURE:
      return {...state, weatherData: {weather: null, success: false, error: action.payload.error}};
    case WeatherActionTypes.WEATHER_RESPONSE_SUCCESS:
      return {...state, weatherData: {weather: action.payload.data, success: true, error: null}};
    default:
      return state;
  }
};

export const weatherActions = {
  requestWeather: (params:{city:string, country:string})=>({
    type: WeatherActionTypes.WEATHER_REQUEST,
    payload: params
  }),
  responseWeatherFailure: (error: string)=>({
    type: WeatherActionTypes.WEATHER_RESPONSE_FAILURE,
    payload: {error}
  }),
  responseWeatherSuccess: (data: WeatherResponse)=>({
    type: WeatherActionTypes.WEATHER_RESPONSE_SUCCESS,
    payload: {data}
  })
}
