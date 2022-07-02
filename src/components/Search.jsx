import {Input, Button } from 'antd';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Menu from './Menu';
import Nav from './Nav';
import {useDispatch, useSelector} from 'react-redux';
import { getValueInput } from '../redux/actions/getValueInput';
import { checkStateComponent } from '../redux/actions/checkStateComponent';
import {axiosData} from '../redux/actions/getDataAction'



function Search() {

  //const [video,setVideo] = useState([]);
  const dispatch = useDispatch();
  const inputValue = useSelector((store)=>store.data)
  const InputCallState = useSelector((store)=>store.state)
  const video = useSelector((store)=>store.obj[0])

  

 
 function handlefunc(){
 

/*   await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&type=video&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`).then(res=>setVideo(res.data.items)); */
//в диспатч передаю импутвалью
    dispatch(checkStateComponent(true));
 
      dispatch(axiosData(inputValue))
 console.log(video)
  
    /* dispatch(getValueInput('')) */
    }

    

  return (
    <div className='search__content'>
       <Menu/>
        <h1>Поиск видео</h1>
        <div className='block'>
        <Input  value={inputValue}  className='searchInput'  onChange={(e)=>dispatch(getValueInput(e.target.value))}  placeholder='Что хотите посмотреть?'   onKeyUp={(e)=>(inputValue.length>0 && e.code === 'Enter')?handlefunc():null} />
        
        <Button className='btn' onClick={()=>handlefunc()} type='primary'>Найти</Button>
        </div>


   
     {InputCallState ? <Nav/> : null} 
          <div className='container-row'>
        {
        
            video &&  video.data.items.map((item,key)=> <div  className='cont'  key={key}>
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