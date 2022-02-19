import {call, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import {WeatherActionTypes} from "./weatherActionTypes";
import {RedoSearchHistoryAction, RemoveSearchHistoryAction, RequestWeatherAction} from "./weatherDeclaration";
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

function* getWeather(city: string, country: string){
  try {
    if(city.trim()===''){
      throw('city field required!')
    }
    const response: WeatherResponseData = yield call(weatherApi.getTodayWeather, city, country);
    yield put(weatherActions.responseWeatherSuccess(response.data));
    const data = response.data;
    yield put(weatherActions.addSearchHistory({
      city: data.name,
      country: data.sys.country
    }))
  }catch(e){
    yield put(weatherActions.responseWeatherFailure(getErrorMessage(e)));
  }
}

function* requestWeather(action: RequestWeatherAction){
 yield call(getWeather, action.payload.city, action.payload.country);
}

export function* redoSearchHistory(action: RedoSearchHistoryAction){
  yield call(getWeather, action.payload.city, action.payload.country);
}

export function* saga(){
  yield takeLatest(WeatherActionTypes.WEATHER_REQUEST, requestWeather);
  yield takeLatest(WeatherActionTypes.SEARCH_HISTORY_REDO, redoSearchHistory);
}
