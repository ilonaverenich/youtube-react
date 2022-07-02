import {Input, Button } from 'antd';
import Content from '../Menu/Menu';
import Infoline from './Infoline/Infoline';
import {useDispatch, useSelector} from 'react-redux';
import { getValueInput } from '../../redux/actions/getValueInput';
import { checkStateComponent } from '../../redux/actions/checkStateComponent';
import {axiosData} from '../../redux/actions/getDataAction';
import styles from './Search.module.less'


function Search() {

  const dispatch = useDispatch();
  const inputValue = useSelector((store)=>store.data)
  const InputCallState = useSelector((store)=>store.state)
  const video = useSelector((store)=>store.obj[0])
 
 function handlefunc(){
    dispatch(checkStateComponent(true));
    dispatch(axiosData(inputValue));
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
          <div className={styles.container_row}>
        {
            video &&  video.data.items.map((item,key)=> <div  className={styles.card}  key={key}>
              <img className={styles.img} width={120} height={90} src={item.snippet.thumbnails.default.url} alt="image-logo-video" />
             <div>
                <p className={styles.subtext}>{item.snippet.title}</p>
                <p className={styles.text}>{item.snippet.description}</p>
             </div>
            </div> ) 
        } </div>   
       </div> 
    </div>

  )
}

export default Search