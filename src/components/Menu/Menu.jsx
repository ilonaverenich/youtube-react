import {useNavigate} from 'react-router-dom';
import styles from './Menu.module.less'

function Menu() {
  const navigate = useNavigate();
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
         
                <a href="#" className={styles.exit}>Выйти</a>
         
         </div>
      </header>
  )
}

export default Menu;