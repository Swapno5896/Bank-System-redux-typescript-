import { combineReducers } from "redux";
import { bankReducer } from "./reducers";






export const reducers = combineReducers({
    bank: bankReducer
})