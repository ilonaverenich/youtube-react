import { GET_DATA } from "../actions/actionsType";

export const getData = (state = [],action)=>{
    switch(action.type){
        case GET_DATA : 
            return [
            action.payload
            ]     
        default:{
            return state;
        };
    }
}