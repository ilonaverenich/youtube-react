
import { Button, Modal,Input } from 'antd';
import {useDispatch, useSelector} from 'react-redux';


function ModalWindow(props) {

const value = useSelector((store)=>store.data)
   
  return (
    <Modal title="Сохранить запрос" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
    <p>Запрос</p>
    <Input disabled value={value}/>
    <p>Название</p>
    <Input/>
    <p>Сортировать по</p>
  </Modal>
  )
}

export default ModalWindow