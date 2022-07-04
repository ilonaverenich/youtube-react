import {Input, Button } from 'antd';
import Content from '../Menu/Menu';
import Infoline from './Infoline/Infoline';
import {useDispatch, useSelector} from 'react-redux';
import { getValueInput } from '../../redux/actions/getValueInput';
import { checkStateComponent } from '../../redux/actions/checkStateComponent';
import {axiosData} from '../../redux/actions/getDataAction';
import {axiosIDViews} from '../../redux/actions/getIdVideoAction'
import styles from './Search.module.less';
import store from '../../redux/store';


function Search() {

  const dispatch = useDispatch();
  const inputValue = useSelector((store)=>store.data)
  const InputCallState = useSelector((store)=>store.state)
   const video = useSelector((store)=>store.obj[0])
  const status = useSelector((store)=>store.status);
  const statistic = useSelector((store)=>store.id[0])
  

console.log(video);
/* console.log(statistic.data.items[0].statistics.viewCount); */



 function handlefunc(){
    dispatch(checkStateComponent(true));
    dispatch(axiosData(inputValue))
    dispatch(axiosIDViews(inputValue))
 
  
  }
  

  return (
    <div>
       <Content/>
      <div className={styles.content}>
        <h1>Поиск видео</h1>
        <div className={styles.block}>
        <Input value={inputValue}  className={styles.searchInput} onChange={(e)=>dispatch(getValueInput(e.target.value))}  placeholder='Что хотите посмотреть?' onKeyUp={(e)=>(inputValue.length>0 && e.code === 'Enter')?handlefunc():null} />
        
        <Button className={styles.btn} onClick={()=>handlefunc()} type='primary'>Найти</Button>
        </div>


       {InputCallState ? <Infoline/> : null} 
     <div className={status.list? styles.container_row: styles.container_column}>
        {
             video &&  video.data.items.map((item,id)=> <div  className={styles.card}  key={id}>
              <img className={styles.img} width={120} height={90} src={item.snippet.thumbnails.default.url} alt="image-logo-video" />
             <div>
                <p className={styles.subtext}>{item.snippet.title}</p>
                <p className={styles.text}>{item.snippet.description}</p>
                {/* <p>просмотры: {statistic.data.items[id].statistics.viewCount}</p> */}
       
             </div>
            
            </div> ) 
        } </div>   
       </div> 
    </div>

  )
}

export default Search