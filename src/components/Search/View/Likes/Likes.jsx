function Likes(props) {
  return (
    <span>
    <img src="https://i.postimg.cc/LXLPFsj7/likeslikes.png"  width={30} height={30} alt="icon-likes" />  
     {
        props.dataVal && props.dataVal[0]  ? props.dataVal[0].statistics.likeCount !==undefined? props.dataVal[0].statistics.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0 :'Loading...'
     }
    </span>
  )
}

export default Likes