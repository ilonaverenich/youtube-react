import { ORDER_REQUEST, NAME_REQUEST,MAX_VALUE_COUNT_REQUEST } from "../actions/actionsType";
const initialValue ={
    nameRequest: '',
    orderRequest: 'date',
    maxValueResult : '5'
}

export const getRequest = (state = initialValue,action)=>{
    switch(action.type){
        case NAME_REQUEST : 
            return {
                ...state,
                nameRequest: action.payload
            }
        case ORDER_REQUEST : 
            return {
                ...state,
                orderRequest: action.payload
            }

            case MAX_VALUE_COUNT_REQUEST: 
            return {
                ...state,
                maxValueResult: action.payload     
            }
             
        default:{
            return state;
        };
    }
}