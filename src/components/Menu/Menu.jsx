import {useNavigate} from 'react-router-dom';
import styles from './Menu.module.less'
import {useSelector, useDispatch} from 'react-redux';
import { checkUser } from '../../redux/actions/avtorizAction';

function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store)=> store.isAuth);

  function exitClick(){
    dispatch(checkUser(false))
    localStorage.clear();
  }
  return (
    <div className={styles.header_bg}>
      <header className={styles.header}>
        <div className={styles.navBar}>
           <img className={styles.logo} src="https://i.postimg.cc/J42J4wmG/yt.png" alt="image-youtube" onClick={()=>navigate('/search')}/>
                <nav>
                <ul>

                <li> <p className={styles.link} onClick={()=>navigate('/search')}> Поиск</p></li>
                <li> <p className={styles.link} onClick={()=>navigate('/favorites')} >Избранное</p> </li>
                
                </ul>
                </nav> 
         
                <a href="#" className={styles.exit} onClick={()=>exitClick()}>Выйти</a>
         
         </div>
      </header>
    </div>
    
  )
}

export default Menu;