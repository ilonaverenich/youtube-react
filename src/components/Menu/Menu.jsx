import {useNavigate} from 'react-router-dom';
import styles from './Menu.module.less'
import {useSelector, useDispatch} from 'react-redux';
import { checkUser } from '../../redux/actions/avtorizAction';

function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store)=> store.isAuth);
  return (
    <header className={styles.header}>
        <div className={styles.navBar}>
           <img className={styles.logo} src="https://i.postimg.cc/J42J4wmG/yt.png" alt="image-youtube" onClick={()=>navigate('/search')}/>
                <nav>
                <ul>

                <li> <a onClick={()=>navigate('/search')}> Поиск</a></li>
                <li> <a onClick={()=>navigate('/favorites')} >Избранное</a> </li>
                
                </ul>
                </nav> 
         
                <a href="#" className={styles.exit} onClick={()=>dispatch(checkUser(false))}>Выйти</a>
         
         </div>
      </header>
  )
}

export default Menu;