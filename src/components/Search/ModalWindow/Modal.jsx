
import { Button, Modal,Input, Slider,Dropdown,Menu , Space} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import styles from './Modal.module.less'


function ModalWindow(props) {

  const [count, setCount] = useState(0)

  const menu = (
    <Menu
      items={[
        {
          label: 'данные из инпута 1',
          key: '0',
        },
        {
          label: 'данные из инпута 2',
          key: '1',
        },
       
        {
          label: 'данные из инпута 3',
          key: '2',
        },
      ]}
    />
  );

const value = useSelector((store)=>store.data)
   
  return (
    <Modal title="Сохранить запрос" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}
    footer={[
      <Button key="no-save" onClick={()=>props.handleCancel()} >
        Не сохранять
      </Button>,
      <Button key="submit" type="primary" onClick={()=>props.handleOk()} >
        Сохранить
      </Button>
    ]}
    >
    <p>Запрос</p>
    <Input value={value}/>
    <p>Название</p>
    <Input/>
    <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={e => e.preventDefault()}>
      <Space>
      Сортировать по
      </Space>
    </a>
  </Dropdown>
    <p>Максимальное количество:</p>
  <div className={styles.block}>
  <div className={styles.slider}>
    <Slider onChange={(e)=>setCount(e)} value={count}  max={50}/>
    </div>
   <p className={styles.count}>{count}</p>
  </div>
    
  </Modal>
  )
}

export default ModalWindow;