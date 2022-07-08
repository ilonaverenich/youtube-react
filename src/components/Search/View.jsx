import React, {useEffect, useState} from 'react';
import axios from 'axios';


let  View =  props => { 
   
const [dataVal, setData] = useState([])

 useEffect(()=>{

  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${props.id}&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`).then((res)=>setData(res.data.items));  
},[props.id])


console.log(dataVal)

  return (
     <div className='view_block'>
      <div>
      <img src="https://i.postimg.cc/05Mw2Cj3/3844476-eye-see-show-view-watch-110339-1.png" width={20} alt="view-icon" /> 
      {
         dataVal && dataVal[0]  ?  dataVal[0].statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):'Ничего нет!'
      } 
      </div>
     <div>
     <img src="https://i.postimg.cc/kGV1G6wG/likes.png"  width={20} height={20} alt="icon-likes" />  
      {
         dataVal && dataVal[0]  ?dataVal[0].statistics.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):'Ничего нет!'
      }
     </div>

     <div>
     <img src="https://i.postimg.cc/52MJcbNL/comment.png"  width={20} height={20} alt="icon-likes" />  
      {
         dataVal && dataVal[0]  ?dataVal[0].statistics.commentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):'Ничего нет!'
      }
     </div>
      </div>
  )
}

export default React.memo(View)