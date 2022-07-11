import {COUNT} from './actionsType';

export const  getCount = (data)=>{
        return {
            type: COUNT,
            payload: data
        }
}