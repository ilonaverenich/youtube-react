import Menu from "./Menu/Menu";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import styles from './Favorites.module.less';


function Favorites() {

  const favoriteList = useSelector((store)=> store.favorite)

/*   const data = useSelector((store)=> store.data) */


  console.log(favoriteList)
  return (
    <div >
        <Menu/>
  
        <div className={styles.content}>
        <h1>Избранное</h1>
        {favoriteList.length==0?<p>Список с избранным пуст</p>: <ul className={styles.border}>
           {
          favoriteList && favoriteList.map((item,index)=>
            <li key={index}>
              <span>{item}</span>  
              <span>max кол-во:</span> 
            </li>

          )
         }
        </ul>}
     
        </div>
         

    </div>
  )
}

export default Favorites