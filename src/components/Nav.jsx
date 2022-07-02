import {useSelector} from 'react-redux'

function Nav(props) {
  const inputValue = useSelector((store)=>store.data)

  return (
    <div className='row'>
        <div> Видео по запросу <span className='value'>"{inputValue}"</span> <span className='sb_tx'>2310</span></div>
        <div>
            <span className="icon" onClick={()=>console.log('click')}><img width={21}  src='https://i.postimg.cc/hvs9HDTC/1.png'></img></span> 
            <span onClick={()=>console.log('click2')} ><img className="icon" width={16} src="https://i.postimg.cc/R01qPPcd/2.png" /></span> 
         </div>
    </div>
  )
}

export default Nav