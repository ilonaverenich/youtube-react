import {STATUS_LIST,STATUS_TABLE} from './actionsType';

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