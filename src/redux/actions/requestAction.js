import {NAME_REQUEST, ORDER_REQUEST,MAX_VALUE_COUNT_REQUEST} from './actionsType';

export const  getNameRequest = (data)=>{
        return {
            type: NAME_REQUEST,
            payload: data
        }
}


export const  getOrderRequest  = (data)=>{
    return {
        type: ORDER_REQUEST,
        payload: data
    }
}

export const getMaxCountRequest  = (data)=>{
    return {
        type: MAX_VALUE_COUNT_REQUEST,
        payload: data
    }
}