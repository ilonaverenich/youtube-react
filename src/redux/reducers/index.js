import { combineReducers } from "redux";
import textReducer from "./textReducers";
import chechStateComponentReducers from './chechStateComponentReducers';
import {getData}  from "./getDataRedusers";
import {getStatus} from "./statusReducers";
import {getId} from "./getIdVideoRedusers";


export default combineReducers({
    data : textReducer,
    state: chechStateComponentReducers,
    obj: getData,
    status: getStatus,
    id: getId
})