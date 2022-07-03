import { STATUS_LIST, STATUS_TABLE } from "../actions/actionsType";
const initialValue ={
    list: true,
    table: false
}

export const getStatus = (state = initialValue,action)=>{
    switch(action.type){
        case STATUS_LIST : 
            return {
                list: action.payload,
                table: false

            }
        case STATUS_TABLE : 
            return {
                list: false,
                table: action.payload
            }
             
        default:{
            return state;
        };
    }
}