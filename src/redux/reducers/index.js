import { combineReducers } from "redux";
import textReducer from "./textReducers";
import chechStateComponentReducers from './chechStateComponentReducers';
import {getData}  from "./getDataRedusers";

export default combineReducers({
    data : textReducer,
    state: chechStateComponentReducers,
    obj: getData
})