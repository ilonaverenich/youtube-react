import {Input, Button} from 'antd';
import Menu from '../Menu/Menu';
import Infoline from './Infoline/Infoline';
import ModalWindow from './ModalWindow/Modal';
import {useDispatch, useSelector} from 'react-redux';
import { getValueInput } from '../../redux/actions/getValueInput';
import { checkStateComponent } from '../../redux/actions/checkStateComponent';
import {axiosData} from '../../redux/actions/getDataAction';
import styles from './Search.module.less';
import {useState} from 'react'
import {getStatusFavorite} from '../../redux/actions/statusAction';
import {dataFav} from '../../redux/actions/dataFavoritesAction';
import View from './View';



function Search() {

  const dispatch = useDispatch();
  const inputValue = useSelector((store)=>store.data)
  const InputCallState = useSelector((store)=>store.state)
  const video = useSelector((store)=>store.obj[0])
  const status = useSelector((store)=>store.status);
  const favoriteList = useSelector((store)=> store.favorite)

  const [inpValue,setInpValue] = useState(inputValue);
  const [isModalVisible, setIsModalVisible] = useState(false);

 function handlefunc(){
    dispatch(checkStateComponent(true));
    dispatch(axiosData(inputValue))
    setInpValue(inputValue)
  }
  function clickHeart(){
   
    setIsModalVisible(true)

  }
  const showModal = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    if (status.heart && inputValue.length !==0){
      dispatch(getStatusFavorite(false))
      setInpValue('')
     
    
     }
     else {
       dispatch(getStatusFavorite(true))
       dispatch(dataFav(inputValue))
       setIsModalVisible(true);
     }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
       <Menu/>
      <div className={styles.content}>
        <h1>Поиск видео</h1>
        <div className={styles.block}>
       
        <Input 
        value={inputValue}
        suffix={<img  onClick={()=>clickHeart()} 
        className={styles.heart} 
        height={20} 
        src={status.heart?'https://i.postimg.cc/D0mSdHxD/icons8-48.png':'https://i.postimg.cc/FH07Zjx9/icons8-50.png' }></img>}

        className={styles.searchInput} 
        onChange={(e)=>{
          dispatch(getValueInput(e.target.value))
          favoriteList.includes(e.target.value)?dispatch(getStatusFavorite(true)):dispatch(getStatusFavorite(false))
          
          
        }}  
        placeholder='Что хотите посмотреть?'
        onKeyUp={(e)=>(inputValue.length>0 && e.code === 'Enter')?handlefunc():null} />
        
        <Button 
        className={styles.btn} 
        onClick={()=>inputValue.length>0 && handlefunc()} 
        type='primary'>Найти</Button>

        </div>


       {InputCallState ? <Infoline value={inpValue}/> : null} 
     <div className={status.list? styles.container_row: styles.container_column}>
        {
             video &&  video.data.items.map((item,id)=> <div   className={styles.card}  key={id}>
              <img 
              className={styles.img} 
              width={120} 
              height={90} 
              src={item.snippet.thumbnails.default.url} 
              alt="image-logo-video" />
             <div>
                <p 
                className={styles.subtext}>{item.snippet.title}</p>
                <p 
                className={styles.container_row? styles.text_row: styles.text_column} >{item.snippet.description}</p>
        
             <div className={styles.view_block}>
             
             <span className={styles.views_count_text}>{ <View id={item.id.videoId}/>}</span>
             </div>
       
             </div>
            
            </div> ) 
        } </div>  
   
      <ModalWindow inpValue={inpValue} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
       </div> 
    </div>

  )
}

export default Search