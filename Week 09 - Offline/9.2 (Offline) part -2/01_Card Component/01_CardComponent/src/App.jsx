import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRoot } from 'react-dom/client';


const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      margin: '10px',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
      {children}
    </div>
  );
};

function App() {

  return (
    <>
      <Card>
         <h2>Zomato Gold Card</h2>
         <p>You have offer to order food free</p>
        </Card>
        <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
    </>
  );
};

export default App;
