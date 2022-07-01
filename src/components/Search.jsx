import {Input, Button } from 'antd';
import {useState} from 'react';
import axios from 'axios';
import { Card, Space } from 'antd';
import Menu from './Menu';
import Nav from './Nav';
/* import {useDispatch, useSelector} from 'react-redux';
import getValue from '../redux/reducers/textReducers' */


function Search() {
  const [value,setValue] = useState('');
  const [InputCallState,setInputCallState] = useState(false);
    const [video,setVideo] = useState([]);


   

async function handlefunc(){

 await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&type=video&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`).then(res=>setVideo(res.data.items));
 setInputCallState(true)
 
    }

   

  return (
    <div className='search__content'>
       <Menu/>
        <h1>Поиск видео</h1>
        <div className='block'>
        <Input value={value} className='searchInput' onChange={(e)=>setValue(e.target.value)} placeholder='Что хотите посмотреть?'  onKeyUp={(e)=>(value.length>0 && e.code === 'Enter')?handlefunc():null} />
        
        <Button className='btn' onClick={()=>handlefunc()} type='primary'>Найти</Button>
        </div>

  
 
{/* 
  {
            video && video.map((item,key)=> <Space key={key} direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Card title={item.snippet.title} size="small">
                <img className='img' width={120} height={90} src={item.snippet.thumbnails.default.url} alt="image-logo-video" />
                  <p>{item.snippet.description}</p>
                </Card>
           </Space>) 
        }   
 */}

    
        
   
       {InputCallState ? <Nav value={value}/> : null}
          <div className='container-row'>
        {
        
            video && video.map((item,key)=> <div  className='cont'  key={key}>
              <img className='img' width={120} height={90} src={item.snippet.thumbnails.default.url} alt="image-logo-video" />
             <div>
                <p className='subtext'>{item.snippet.title}</p>
                <p className='text'>{item.snippet.description}</p>
             </div>
              <p></p>
          
            </div> ) 
        } </div> 
       </div> 

  )
}

export default Search