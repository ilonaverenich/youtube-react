import {useNavigate, NA, NavLink} from 'react-router-dom';
import styles from './Menu.module.less'
import {useSelector, useDispatch} from 'react-redux';
import { checkUser } from '../../redux/actions/avtorizAction';

function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function exitClick(){
    dispatch(checkUser(false))
    localStorage.clear();
  }
  return (
    <div className={styles.header_bg}>
      <header className={styles.header}>
        <div className={styles.navBar}>
           <img className={styles.logo} src="https://i.postimg.cc/J42J4wmG/yt.png" alt="image-youtube"/>
                <nav>

                <NavLink to='search'>Поиск</NavLink>
                <NavLink to='favorites'>Избранное</NavLink>
             {/*    <ul>

                <li onClick={()=>navigate('search')}> <p className={styles.link} > Поиск</p></li>
                <li onClick={()=>navigate('favorites')}> <p className={styles.link}  >Избранное</p> </li>
                
                </ul> */}
                </nav> 
         
                <a href="#" className={styles.exit} onClick={()=>exitClick()}>Выйти</a>
         
         </div>
      </header>
    </div>
    
  )
}

export default Menu;