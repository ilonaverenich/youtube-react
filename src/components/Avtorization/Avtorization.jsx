import axios from 'axios';
import styles from'./Avtorization.module.less';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch} from 'react-redux';
import { checkUser } from '../../redux/actions/avtorizAction';
import FormAvtorization from './FormPage/FormAvtorization';



function Avtorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
          axios.post('https://typ-back-end.herokuapp.com/api/login', 
          {
              "login": values.username,
              "password": values.password,
          })
          .then((res)=>{
              if (res.data.token !==null){
                navigate('/search');
                dispatch(checkUser(true))
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('email', values.username);
              }
              else {
               message.error('Ошибка! Проверьте введённые данные или зарегистрируйтесь');
          }
      })
    };
    
  

  return (
   <div className={styles.avtorization}>
     <div className={styles.form}>  
        <img className={styles.img_youtube} width={140} src="https://i.postimg.cc/J42J4wmG/yt.png" alt="image-youtube" />
        <FormAvtorization onFinish={onFinish} />
   
  </div>
   </div>
  )
}

export default Avtorization