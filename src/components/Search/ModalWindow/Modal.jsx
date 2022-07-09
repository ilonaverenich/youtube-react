
import { Button, Modal,Input, Slider,Select,Menu } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import styles from './Modal.module.less';
import {getNameRequest,getOrderRequest,getMaxCountRequest} from '../../../redux/actions/requestAction'

const { Option } = Select;


function ModalWindow(props) {

  const [count, setCount] = useState(0);
  const request = useSelector((store)=>store.request);
  const dispatch = useDispatch()

  console.log(request)
  function getSliderValue (e){
   dispatch(getMaxCountRequest(e))
    setCount(e) 
   
  }


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
    ]} >
    <p>Запрос</p>
    <Input disabled value={value}/>
    <p>Название</p>
    <Input onChange={(e)=>dispatch(getNameRequest(e.target.value))}/>
    <p>Сортировать по:</p>
    <Select defaultValue="videoCount" style={{ width: 450 }} onChange={(value)=>dispatch(getOrderRequest(value))} placeholder='Без сортировки'>
      <Option value="date">Ресурсы сортируются в обратном хронологическом порядке по дате их создания.</Option>
      <Option value="rating">Ресурсы отсортированы от самого высокого к самому низкому рейтингу.</Option>
      <Option value="relevance">Ресурсы сортируются по релевантности поисковому запросу. Это значение по умолчанию для этого параметра.</Option>
      <Option value="title">Ресурсы отсортированы в алфавитном порядке по названию.</Option>
      <Option value="videoCount">Каналы отсортированы в порядке убывания количества загруженных видео.</Option>
      <Option value="viewCount">Ресурсы отсортированы от наибольшего к наименьшему количеству просмотров.</Option>
    </Select>
    <p>Максимальное количество:</p>
  <div className={styles.block}>
  <div className={styles.slider}>
    <Slider onChange={(e)=>getSliderValue(e)} value={count}  max={50}/>
    </div>
   <p className={styles.count}>{count}</p>
  </div>
    
  </Modal>
  )
}

export default ModalWindow;