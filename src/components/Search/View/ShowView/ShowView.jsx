//Сделать доп проверку на данные
function ShowView(props) {
  return (
    <span>
      <img src="https://i.postimg.cc/05Mw2Cj3/3844476-eye-see-show-view-watch-110339-1.png" className="img" width={30} alt="view-icon" /> 
      {
         props.dataVal && props.dataVal[0]  ?  props.dataVal[0].statistics.viewCount !== undefined? props.dataVal[0].statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","): 0 :'Loading...'
      } 
      </span>
  )
}

export default ShowView