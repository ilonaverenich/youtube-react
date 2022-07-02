import {useSelector} from 'react-redux';
import styles from './Infoline.module.less'

function Infoline() {
  const inputValue = useSelector((store)=>store.data)

  return (
    <div className={styles.infoline}>
        <div> Видео по запросу <span className={styles.value}>"{inputValue}"</span> <span className={styles.sb_tx}>2310</span></div>
        <div>
            <span onClick={()=>console.log('click')}><img className={styles.icon} width={21}  src='https://i.postimg.cc/hvs9HDTC/1.png'></img></span> 
            <span  className= {styles.no_active} onClick={()=>console.log('click2')} ><img className={styles.icon} width={16} src="https://i.postimg.cc/R01qPPcd/2.png" /></span> 
         </div>
    </div>
  )
}

export default Infoline;