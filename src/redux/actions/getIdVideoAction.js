import {ID} from "./actionsType";
import axios from "axios";

export const axiosIDViews =(inputValue)=>async(dispatch)=>{ 
    try{
        const views =  await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&type=video&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`).then((res)=>  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${res.data.items.map(el=>el.id.videoId)}&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`));
         dispatch(getId(views))

    }
    catch {
        throw new Error ('Error!')
    }
}
export const getId = (id)=>{

    return {
        type: ID,
        payload: id
    };
};