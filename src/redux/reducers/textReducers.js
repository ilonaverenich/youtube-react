import {GET_INPUT_VALUE} from '../actions/actionsType';
const initialValue ='';

export default function textReducer(state = initialValue, action){
    switch(action.type){
        case GET_INPUT_VALUE: {
            return action.payload;
        }
        default: {return state}
    }
}