import React from 'react';
import { Button, Form, Input } from 'antd';
import styles from'./FormAvtorization.module.less';


function FormAvtorization(props) {
  return (
   <div>
     <Form
        name="basic"
        onKeyUp={(e)=>e.code === 'Enter'?props.onFinish():''}
        initialValues={{remember: true }}
        onFinish={props.onFinish}>
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
  )
}

export default FormAvtorization