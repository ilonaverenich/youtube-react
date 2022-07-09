import { Button, Form, Input,message } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import styles from'./Avtorization.module.less'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { checkUser } from '../../redux/actions/avtorizAction';


function Avtorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store)=> store.isAuth);
//isAuth хранит авторизацию пользователя



      const onFinish = (values) => {
          axios.post('https://typ-back-end.herokuapp.com/api/login', {
          "login": values.username,
          "password": values.password,
        }).then((res)=>{
          if (res.data.token !==null){
            navigate('/search');
            dispatch(checkUser(true))
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', values.username);
          }

            else {
               message.error('Ошибка! Проверьте введённые данные или зарегистрируйтесь');
          }
      })};
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


  return (
   <div className={styles.avtorization}>
     <div className={styles.form}>  
        <img className={styles.img_youtube} width={140} src="https://i.postimg.cc/J42J4wmG/yt.png" alt="image-youtube" />
    
      <Form
        name="basic"
        onKeyUp={(e)=>e.code === 'Enter'?onFinish():''}
        initialValues={{remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
      <Form.Item
    
        label="Логин"
        name="username"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свой логин!',
          },
        ]}
      >
      <Input/>
    </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свой пароль!',
          },
        ]}
      >
    <Input.Password/>
    </Form.Item>

    <Form.Item>
      <Button className={styles.btn} type="primary" htmlType="submit">
       Войти
      </Button>
    </Form.Item>
  </Form>
  </div>
   </div>
  )
}

export default Avtorization