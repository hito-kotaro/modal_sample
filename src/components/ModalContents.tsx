import React,{VFC} from 'react'
import { useModal } from 'react-hooks-use-modal'
import Button from './Button'
import InputForm from './InputForm'

const Modal = (props:any) => {
  const {modalStyle, onClick} = props

  return (
    <div style={modalStyle}>
      <h2>Sample Modal</h2>
      <p>this is sample modal</p>
      <InputForm/>
      <Button onClick={onClick}>ModalClose</Button>
    </div>

    )
}

export default Modal