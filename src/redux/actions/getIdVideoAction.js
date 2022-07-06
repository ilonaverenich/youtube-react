import {ID} from "./actionsType";
import axios from "axios";

export const axiosIDViews =(id)=>async(dispatch)=>{ 
    try{
        /* const views =  await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`);
         dispatch(getId(views)) */

    }
    catch {
        throw new Error ('Error!');
    }
}
export const getId = (id)=>{

    return {
        type: ID,
        payload: id
    };
};