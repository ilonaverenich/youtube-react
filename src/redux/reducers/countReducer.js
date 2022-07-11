import {COUNT} from '../actions/actionsType';
const initialValue ='';

export default function getCountValue(state = initialValue, action){
    switch(action.type){
    
        case COUNT: {
            return action.payload;
        }
        default: {return state}
    }
}