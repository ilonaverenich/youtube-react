import React, {useEffect, useState} from 'react';
import axios from 'axios';


function View(props) { 
   
const [dataVal, setData] = useState([])

 useEffect(()=>{

  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${props.id}&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`).then((res)=>setData(res.data.items));  
},[])
console.log(dataVal)

  return (
     <span>
     {/*  {
        dataVal.length!==0 && dataVal  !== undefined? dataVal[0].statistics.viewCount:'hello, тут пусто' 
        } */}
      </span>
  )
}

export default View