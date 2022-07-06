import {DATA_FAVORITES} from './actionsType';

export const  dataFav = (data)=>{
        return {
            type: DATA_FAVORITES,
            payload: data
        }
}