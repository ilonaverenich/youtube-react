import {GET_DATA} from "./actionsType";
import axios from "axios";


export const axiosData =(inputValue, order, maxResult)=>async(dispatch)=>{ 
    try{
        const data =  await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&type=video&order=${order}&maxResults=${maxResult}&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`)
        
        dispatch(getData(data))
    }
    catch {
        throw new Error ('Error!')
    }
}
export const getData = (data)=>{
    return {
        type: GET_DATA,
        payload: data
    };
};