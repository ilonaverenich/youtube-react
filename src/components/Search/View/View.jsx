import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import Likes from './Likes/Likes';
import ShowView from './ShowView/ShowView';



let  View =  props => { 
   
const [dataVal, setData] = useState([])

 useEffect(()=>{
  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${props.id}&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`).then((res)=>setData(res.data.items));  
},[props.id])

  return (
     <div className='view_block'>
       <ShowView dataVal={dataVal}/>
       <Likes dataVal={dataVal}/>
       <Comments dataVal={dataVal}/>
      </div>
  )
}

export default React.memo(View)