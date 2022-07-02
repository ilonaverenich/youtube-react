import {CHECK_STATE_COMPONENT} from './actionsType';

export const  checkStateComponent = (data)=>{
        return {
            type: CHECK_STATE_COMPONENT,
            payload: data
        }
}