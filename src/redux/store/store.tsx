import { applyMiddleware, createStore } from "redux";
import { reducers } from './../reducers/combineReducers';
import logger from "redux-logger";
const myStore = createStore(reducers, applyMiddleware(logger));

export default myStore;