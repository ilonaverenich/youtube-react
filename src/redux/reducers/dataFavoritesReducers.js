import { DATA_FAVORITES} from "../actions/actionsType";

export const getDataFavorite = (state = [],action)=>{
    
    switch(action.type){
   
        case DATA_FAVORITES : 
        
            return [...state, action.payload] 
        default:{
            return state;
        };
    }
}