import { ID } from "../actions/actionsType";

export const getId = (state = [],action)=>{
    
    switch(action.type){
     
        case ID : 
            return [...state, action.payload]    
        default:{
            return state;
        };
    }
}