import {call, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import {WeatherActionTypes} from "./weatherActionTypes";
import {RequestWeatherAction} from "./weatherDeclaration";
import * as weatherApi from "./weatherApi";
import {weatherActions} from './weatherReducer';

function getErrorMessage(e:any){
  let errorMessage: string;
  if(e instanceof TypeError) {
    errorMessage = (e as TypeError).message;
  } else if (typeof e === "string"){
    errorMessage = e;
  } else if(e?.response?.data?.message){
    errorMessage = e.response.data.message;
  }else {
    console.log(e);
    errorMessage = 'unexpected, please trace'
  }
  return errorMessage;
}

type WeatherResponseData = SagaReturnType<typeof weatherApi.getTodayWeather>;

function* requestWeather(action: RequestWeatherAction){
  try {
    const {city, country} = action.payload;
    const response: WeatherResponseData = yield call(weatherApi.getTodayWeather, city, country);
    yield put(weatherActions.responseWeatherSuccess(response.data));
  }catch(e){
    yield put(weatherActions.responseWeatherFailure(getErrorMessage(e)));
  }
}

export function* saga(){
  yield takeLatest(WeatherActionTypes.WEATHER_REQUEST, requestWeather);
}
