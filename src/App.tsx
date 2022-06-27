import React from 'react';
import Avatar from "boring-avatars";
import { useModal } from 'react-hooks-use-modal';
import './App.css';
import Button from './components/Button';
import InputForm from './components/InputForm';
import useInputForm from './hooks/useInputForm';
import useButtonAction from './hooks/useButtonAction';

const  App = () =>{
  const [Modal, open, close, isOpen] = useModal('root')
  const {input, onChange, clear} = useInputForm()
  const {display} = useButtonAction()

  const modalStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '60px 100px',
    borderRadius: '10px',
  };


  return (
    <div className="App">
      <h1>Hello Modal</h1>
      <button type='button' onClick={open}>Modal Open</button>
      <div className='modal'>
      
      </div>
      <Modal>
        <div style={modalStyle}>
          <h2>Sample Modal</h2>
          <Avatar
            size={40}
            name="土肥 康太郎"
            variant="beam"
            colors={["#FFBD87", "#FFD791", "#F7E8A6", "#D9E8AE", "#BFE3C0"]}
          />
          <p>this is sample modal</p>
          <InputForm input={input} onChange={onChange}/>
          <Button onClick={() => display(input, close, clear)}>ModalClose</Button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
