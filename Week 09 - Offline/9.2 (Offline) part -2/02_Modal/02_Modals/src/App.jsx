import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Modal = ({ isOpen, onClose, children }) => {
  if(!isOpen) return null;


  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }}>
      <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '5px',
      }}>
          <button onClick={onClose}>Close</button>
          {children}
      </div>
  </div>
  );
};
  
  
const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
       <button  onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is some content inside modal</p>
      </Modal>
    </div>
  )
}



export default App;
