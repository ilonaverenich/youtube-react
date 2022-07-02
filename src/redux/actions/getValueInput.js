import {GET_INPUT_VALUE} from './actionsType';

export const  getValueInput = (data)=>{
        return {
            type: GET_INPUT_VALUE,
            payload: data
        }
}