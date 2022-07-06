import {STATUS_LIST,STATUS_TABLE, STATUS_FAVORITES} from './actionsType';

export const  getStatusList = (data)=>{
        return {
            type: STATUS_LIST,
            payload: data
        }
}


export const  getStatusTable = (data)=>{
    return {
        type: STATUS_TABLE,
        payload: data
    }
}

export const getStatusFavorite = (data)=>{
    return {
        type: STATUS_FAVORITES,
        payload: data
    }
}