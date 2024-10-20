import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
FocusInput
import './index.css'
import FocusInput from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FocusInput />
  </StrictMode>,
)
