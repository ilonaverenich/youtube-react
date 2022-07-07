import { combineReducers } from "redux";
import checkAuth from "./avtorizReducer";
import textReducer from "./textReducers";
import chechStateComponentReducers from './chechStateComponentReducers';
import {getData}  from "./getDataRedusers";
import {getStatus} from "./statusReducers";
import {getDataFavorite} from "./dataFavoritesReducers";



export default combineReducers({
    isAuth: checkAuth,
    data : textReducer,
    state: chechStateComponentReducers,
    obj: getData,
    status: getStatus,
    favorite: getDataFavorite
})