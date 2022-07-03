import {useDispatch, useSelector} from 'react-redux';
import styles from './Infoline.module.less';
import {getStatusList,getStatusTable} from '../../../redux/actions/statusAction'

function Infoline() {
  const inputValue = useSelector((store)=>store.data)
  const status = useSelector((store)=>store.status);
  const dispatch = useDispatch()


  return (
    <div className={styles.infoline}>
        <div> Видео по запросу <span className={styles.value}>"{inputValue}"</span> <span className={styles.sb_tx}>2310</span></div>
        <div>
            <span className= {!status.list? styles.no_active:'' } onClick={()=>dispatch(getStatusList(true))}><img className={styles.icon} width={21}  src='https://i.postimg.cc/hvs9HDTC/1.png'></img></span> 


            <span  className= {!status.table? styles.no_active:'' }  onClick={()=>dispatch(getStatusTable(true))} ><img className={styles.icon} width={16} src="https://i.postimg.cc/R01qPPcd/2.png" /></span> 
         </div>
    </div>
  )
}

export default Infoline;