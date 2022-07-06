import { STATUS_LIST, STATUS_TABLE,STATUS_FAVORITES } from "../actions/actionsType";
const initialValue ={
    list: true,
    table: false,
    heart :false
}

export const getStatus = (state = initialValue,action)=>{
    switch(action.type){
        case STATUS_LIST : 
            return {
                ...state,
                list: action.payload,
                table: false

            }
        case STATUS_TABLE : 
            return {
                ...state,
                list: false,
                table: action.payload
            }

            case STATUS_FAVORITES: 
            return {
                ...state,
                heart: action.payload
                
            }
             
        default:{
            return state;
        };
    }
}