/**
 * Configure redux store, 
 * load initial state from localStorage;
 * save state changes to localStorage;
 */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, {rootSaga} from "./rootReducer";
import {throttle} from "lodash";
import {loadState, saveState} from "./localStorage";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  // load state form localStorage to initialize store
  loadState(),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

/**
 * Save redux store state to localStorage when state changed
 */
store.subscribe(throttle(()=>{
  saveState(store.getState())
},1000));

sagaMiddleware.run(rootSaga);

export default store;
