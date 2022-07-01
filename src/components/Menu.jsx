import {useNavigate} from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  return (
    <header className='header'>
        <div className='navBar'>
                <img className='img_youtube'  src="https://i.postimg.cc/J42J4wmG/yt.png" alt="image-youtube" onClick={()=>navigate('/search')}/>
                <nav>
                <ul>

                <li> <a onClick={()=>navigate('/search')}> Поиск</a></li>
                <li><a onClick={()=>navigate('/favorites')} >Избранное</a> </li>
                
                </ul>
                </nav> 
                 <a href="#" className='exit'>Выйти</a>
         </div>
      </header>
  )
}

export default Menu