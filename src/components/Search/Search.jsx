import {useDispatch, useSelector} from 'react-redux';
import {Input, Button} from 'antd';
import Menu from '../Menu/Menu';
import Infoline from './Infoline/Infoline';
import ModalWindow from './ModalWindow/Modal';

import { getValueInput } from '../../redux/actions/getValueInput';
import { checkStateComponent } from '../../redux/actions/checkStateComponent';
import {axiosData} from '../../redux/actions/getDataAction';
import styles from './Search.module.less';
import {useState} from 'react'
import {getStatusFavorite} from '../../redux/actions/statusAction';
import {dataFav} from '../../redux/actions/dataFavoritesAction';
import View from './View/View'
import {getCount} from '../../redux/actions/countAction'



function Search() {

  const dispatch = useDispatch();
  const request = useSelector((store)=>store.request)
  const inputValue = useSelector((store)=>store.data)
  const InputCallState = useSelector((store)=>store.state)
  const video = useSelector((store)=>store.obj[0])
  const status = useSelector((store)=>store.status);
  const favoriteList = useSelector((store)=> store.favorite)
   const count = useSelector((store)=> store.count)

  const [inpValue,setInpValue] = useState(inputValue);
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(video)

 function handlefunc(){
    dispatch(checkStateComponent(true));
    dispatch(axiosData(inputValue, 'viewCount', '6'))
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
      dispatch(axiosData(inputValue, request.orderRequest, request.maxValueResult))
      console.log(request.maxValueResult)
      dispatch(getCount(request.maxValueResult)) 
     
    
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
        suffix={<img onClick={()=>clickHeart()} 
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
              width={item.snippet.thumbnails.medium.width} 
              height={item.snippet.thumbnails.medium.height}  
              src={item.snippet.thumbnails.medium.url} 
              alt="image-logo-video" />
             <div className={styles.block_text}>
                <p 
                className={styles.subtext}>{item.snippet.title}</p>
                <p 
                className={styles.container_row? styles.text_row: styles.text_column} ><span className={styles.subtitle}>{item.snippet.description}</span></p>
        
              <div className={styles.view_block}>
                   
                      { <View id={item.id.videoId}/>}
              </div>
             </div> 
            </div> 
            ) 
        } </div>  
   
      <ModalWindow  inpValue={inpValue} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
       </div> 
    </div>

  )
}

export default Search