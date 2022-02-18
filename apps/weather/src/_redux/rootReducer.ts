import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import {weatherReducer} from "./weather/weatherReducer";
import * as weatherSaga from "./weather/weatherSaga";

const rootReducer = combineReducers ({
  weather: weatherReducer
});

export function* rootSaga(){
  yield all([
    weatherSaga.saga()
  ]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
