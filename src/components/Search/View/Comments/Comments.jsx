
function Comments(props) {
  return (
    <span>
     <img src="https://i.postimg.cc/52MJcbNL/comment.png"  width={28} height={28} alt="icon-likes" />  
      {
         props.dataVal && props.dataVal[0]  ? props.dataVal[0].statistics.commentCount !== undefined? props.dataVal[0].statistics.commentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","): 0 :'Loading...'
      }
     </span>
  )
}

export default Comments