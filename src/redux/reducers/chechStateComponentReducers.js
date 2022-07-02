import {CHECK_STATE_COMPONENT} from '../actions/actionsType';
const initialValue =false;

export default function chechStateComponentReducers(state = initialValue, action){
    switch(action.type){
        case CHECK_STATE_COMPONENT: {
            return action.payload;
        }
        default: {return state}
    }
}