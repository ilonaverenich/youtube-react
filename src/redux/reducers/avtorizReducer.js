import {AVTORIZATION_USER} from '../actions/actionsType';
const initialValue =false;

export default function checkAuth(state = initialValue, action){
    switch(action.type){
        case AVTORIZATION_USER: {
            return action.payload;
        }
        default: {return state}
    }
}