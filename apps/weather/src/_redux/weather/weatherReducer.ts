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
    case WeatherActionTypes.SEARCH_HISTORY_ADD: {
      const newItem = {...action.payload, date: new Date()};
      const histories = state.searchHistory.filter(item=> item.city!==newItem.city && item.country !== newItem.country);
      return {...state, searchHistory: [newItem, ...histories]}
    }
    case WeatherActionTypes.SEARCH_HISTORY_REMOVE:{
      const target = action.payload;
      const histories = state.searchHistory.filter(item=> item.city!==target.city && item.country !== target.country);
      return {...state, searchHistory: histories}
    }
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
  }),
  addSearchHistory:(params:{city:string, country:string})=>({
    type: WeatherActionTypes.SEARCH_HISTORY_ADD,
    payload: params
  }),
  removeSearchHistory:(params:{city:string, country:string})=>({
    type: WeatherActionTypes.SEARCH_HISTORY_REMOVE,
    payload: params
  }),
  redoSearchHistory:(params:{city:string, country:string})=>({
    type: WeatherActionTypes.SEARCH_HISTORY_REDO,
    payload: params
  })
}
