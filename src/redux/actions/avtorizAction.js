import {AVTORIZATION_USER} from './actionsType';

export const  checkUser = (data)=>{
        return {
            type: AVTORIZATION_USER,
            payload: data
        }
}